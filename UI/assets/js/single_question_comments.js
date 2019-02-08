const windowUrlArray = window.location.href.split('/');
windowUrlArray.pop();
const windowUrl = windowUrlArray.join('/');
const comment = document.getElementById('comment');
const showOverlay = () => {
  document.querySelector('.loading').style.display = 'block';
};

const hideOverlay = () => {
  document.querySelector('.loading').style.display = 'none';
};

const getQuestionId = () => {
  const urlString = window.location.href;
  const url = new URL(urlString);
  const questionId = url.searchParams.get('id');

  return questionId;
};
const {
  body,
} = window.document;

const convertDate = (createdon) => {
  const dateObject = new Date(createdon);
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: 'numeric',
  }).format(dateObject);

  return formattedDate;
};

const getSingleQuestion = async () => {
  const questionId = getQuestionId();

  const singleQuestionApiUrl = `https://enigmatic-refuge-95413.herokuapp.com/api/v1/questions/${questionId}`;
  showOverlay();



  let userToken;
  if (localStorage.getItem('user')) {
    const userData = JSON.parse(localStorage.getItem('user'));
    const {
      token,
    } = userData;

    userToken = token;
  }

  if (!userToken) {
    window.location.href = `${windowUrl}/login.html`;
  }
  await fetch(singleQuestionApiUrl, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      },
    })
    .then(res => res.json())
    .then((response) => {
      hideOverlay();

      // check for success status
      if (response.status === 200) {
        const question = response.data;
        // console.log(question);

        const creationDate = convertDate(question.created_on);

        // output = `<div class="question">
        //     <div class="question__poster">
        //       John doe
        //     </div>
        //     <span class="question__time">
        //       ${creationDate}
        //     </span>
        //     <div class="question__body">
        //     ${question.body}
        //     </div>
        //     <div class="comments--vote">
        //       <div class="comments--vote__item"><span class="upvote"><i class="fas fa-thumbs-up"></i></span><span class="upvote--number">${question.up_votes}</span></div>
        //       <div class="downvote comments--vote__item"><span class="downvote"><i class="fas fa-thumbs-down"></i></span><span class="downvote--number">${question.down_votes}</span></div >
        //     </div>
        //   </div>`;

        output = `<div class="question">
              <div class="question__poster">
                John doe
              </div>
              <span class="question__time">
                ${creationDate}
              </span>
              <div class="question__body">
               ${question.body}
              </div>
              <div class="comments--vote">
                <div class="comments--vote__item"><span class="upvote"><i class="fas fa-thumbs-up"></i></span><span
                    class="upvote--number">${question.up_votes}</span>
                </div>
                <div class="comments--vote__item"><span class="downvote"><i class="fas fa-thumbs-down"></i></span><span
                    class="downvote--number">
                    ${question.down_votes}</span></div>
              </div>
            </div>`;


        const questionContainer = document.getElementById('question--detail');


        questionContainer.innerHTML = output;

      } else {
        console.log(response);
      }
    })
    .catch(err => err);
};



const createComment = async (e) => {
  e.preventDefault();
  showOverlay();
  const questionId = getQuestionId();
  const commentApiUrl = `https://enigmatic-refuge-95413.herokuapp.com/api/v1/comments`;
  // User input data object

  const formData = {
    questionId,
    comment: comment.value,
  };


  let userToken;
  if (localStorage.getItem('user')) {
    const userData = JSON.parse(localStorage.getItem('user'));
    const {
      token,
    } = userData;

    userToken = token;
  }


  await fetch(commentApiUrl, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      },
    })
    .then(res => res.json())
    .then((response) => {
      console.log(response)

      hideOverlay();

      // check for success status
      if (response.status === 201) {
        window.location.reload();
      }
    })
    .catch(err => err);
};

const getComments = async () => {
  showOverlay();
  const questionId = getQuestionId();
  const questionCommentsApiUrl = `https://enigmatic-refuge-95413.herokuapp.com/api/v1/questions/${questionId}/comments`;


  let userToken;
  if (localStorage.getItem('user')) {
    const userData = JSON.parse(localStorage.getItem('user'));
    const {
      token,
    } = userData;

    userToken = token;
  }


  await fetch(questionCommentsApiUrl, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      },
    })
    .then(res => res.json())
    .then((response) => {

      hideOverlay();

      // check for success status
      if (response.status === 201) {
        const comments = response.data;
        console.log(comments);
        let output = '';

        comments.forEach((comment) => {
          const creationDate = convertDate(comment.created_on);

          output += `<div class="comment">
              <div class="comment__poster">
                John doe
              </div>
              <span class="comment__time">
                ${creationDate}
              </span>
              <div class="comment__body">
              ${comment.comment}
              </div>
            </div>`;
        });


        const commentsContainer = document.getElementById('comments--container');

        commentsContainer.innerHTML = output;
      }

    })
    .catch(err => err);
};

body.addEventListener('load', getSingleQuestion());
body.addEventListener('load', getComments());
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', createComment);