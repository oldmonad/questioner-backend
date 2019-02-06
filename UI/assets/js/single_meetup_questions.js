const windowUrlArray = window.location.href.split('/');
windowUrlArray.pop();
const windowUrl = windowUrlArray.join('/');
const question = document.getElementById('question');

const showOverlay = () => {
  document.querySelector('.loading').style.display = 'block';
};

const hideOverlay = () => {
  document.querySelector('.loading').style.display = 'none';
};

function showAlert(message, className) {
  const div = document.createElement('div');
  //Add ClassName
  div.className = `alert ${className}`;
  const p = document.createElement("p");
  p.appendChild(document.createTextNode(message));
  div.appendChild(p);

  const container = document.querySelector('.login--section');
  const form = document.querySelector('.custom--form');

  //Insert alert
  container.insertBefore(div, form);
  //Timeout after 5 seconds
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
}

const getMeetupId = () => {
  const urlString = window.location.href;
  const url = new URL(urlString);
  const meetupId = url.searchParams.get('id');

  return meetupId;
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

const getSingleMeetup = async () => {
  const meetupId = getMeetupId();
  const singleMeetupApiUrl = `https://enigmatic-refuge-95413.herokuapp.com/api/v1/meetups/${meetupId}`;
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


  await fetch(singleMeetupApiUrl, {
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
        const meetup = response.data;

        const creationDate = convertDate(meetup.created_on);
        const happeningOn = convertDate(meetup.happening_on);
        output = `<div class="meetup">
            <div class="meetup--header">
              <img class="meetup--image" src="./assets/img/woman.png" />
              <h1 class="meetup--title">
                ${meetup.topic}
              </h1>
            </div>

            <div class="meetup--details">
              <div class="meetup--detail">
                <p class="meetup--detail__label">Location:</p>
                <p class="meetup--detail__information">
                  ${meetup.location}
                </p>
              </div>

              <div class="meetup--detail">
                <p class="meetup--detail__label">Date:</p>
                <p class="meetup--detail__information">${happeningOn}</p>
              </div>

              <div class="meetup--detail">
                <p class="meetup--detail__label">Location URL:</p>
                <p class="meetup--detail__information">www.google.com</p>
              </div>

              <div class="meetup--detail">
                <p class="meetup--detail__label">Created on:</p>
                <p class="meetup--detail__information">${creationDate}</p>
              </div>
            </div>
            <div class="tags">
              <div class="tag">technology</div>
              <div class="tag">technology</div>
            </div>
            <div>
              <span class="closeBtn"><i class="fas fa-trash"></i></span>
            </div>
          </div>`;


        const meetupContainer = document.getElementById('meetup--detail');


        meetupContainer.innerHTML = output;

      } else {
        console.log(response);
      }
    })
    .catch(err => err);
};

const deleteMeetup = async () => {
  const meetupId = getMeetupId();
  e.preventDefault();
  showOverlay();


  const deleteMeetupUrl = `https://enigmatic-refuge-95413.herokuapp.com/api/v1/meetups/delete/${meetupId}`;


  let userToken;
  if (localStorage.getItem('user')) {
    const userData = JSON.parse(localStorage.getItem('user'));
    const {
      token,
    } = userData;

    userToken = token;
  }


  await fetch(deleteMeetupUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      },
    })
    .then(res => res.json())
    .then((response) => {
      window.location.reload();
      hideOverlay();

      // check for success status
      if (response.status === 200) {

      } else {
        console.log(response);

      }
    })
    .catch(err => err);
};

// Create new  question
const createQuestion = async (e) => {
  e.preventDefault();
  showOverlay();
  const meetupId = getMeetupId();
  const questionApiUrl = `https://enigmatic-refuge-95413.herokuapp.com/api/v1/questions`;
  // User input data object
  const formData = {
    meetupId,
    body: question.value,
  };


  let userToken;
  if (localStorage.getItem('user')) {
    const userData = JSON.parse(localStorage.getItem('user'));
    const {
      token,
    } = userData;

    userToken = token;
  }


  await fetch(questionApiUrl, {
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
      // console.log(response)

      hideOverlay();

      // check for success status
      if (response.status === 201) {
        window.location.reload();
      }
    })
    .catch(err => err);
};


const getQuestions = async () => {
  showOverlay();
  const meetupId = getMeetupId();
  const meetupQuestionsApiUrl = `https://enigmatic-refuge-95413.herokuapp.com/api/v1/meetups/${meetupId}/questions`;


  let userToken;
  if (localStorage.getItem('user')) {
    const userData = JSON.parse(localStorage.getItem('user'));
    const {
      token,
    } = userData;

    userToken = token;
  }


  await fetch(meetupQuestionsApiUrl, {
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
        const questions = response.data;
        let output = '';

        questions.forEach((question) => {
          const creationDate = convertDate(question.created_on);

          output += `<div class="question">
              <a class "single-question" href="question_comments.html?id=${question.id}">
              <div class="question__poster">
                John doe
              </div>
              <span class="question__time">
                ${creationDate}
              </span>
              <div class="question__body">${question.body}
              </div>
              <div class="comments--vote">
                <div class="upvote comments--vote__item">Downvote <span class="downvote--number">${question.up_votes}</span></div>
                <div class="downvote comments--vote__item">Upvote <span class="upvote--number">${question.down_votes}</span></div>
              </div>
              </a>
            </div>`;
        });


        const questionContainer = document.getElementById('questions--container');

        questionContainer.innerHTML = output;
        // window.location.reload();
      } else {
        console.log(response);
      }
    })
    .catch(err => err);
};

body.addEventListener('load', getSingleMeetup());
body.addEventListener('load', getQuestions());
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', createQuestion);
const deleteBtn = document.getElementById('delete--meetup');
deleteBtn.addEventListener('click', deleteMeetup);