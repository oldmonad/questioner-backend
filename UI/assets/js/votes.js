const windowUrlArray = window.location.href.split('/');
windowUrlArray.pop();
const windowUrl = windowUrlArray.join('/');
const upvote = document.getElementById('upvote');
const downvote = document.getElementById('downvote');
const showOverlay = () => {
  document.querySelector('.loading').style.display = 'block';
};

const hideOverlay = () => {
  document.querySelector('.loading').style.display = 'none';
};

const upvote = () => {
  const urlString = window.location.href;
  const url = new URL(urlString);
  const questionId = url.searchParams.get('id');

  return questionId;
};
const {
  body,
} = window.document;

const getSingleQuestion = async () => {
  const questionId = getQuestionId();

  const upvoteApiUrl = `https://enigmatic-refuge-95413.herokuapp.com/api/v1/questions/${questionId}/upvote`;
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

      } else {
        console.log(response);
      }
    })
    .catch(err => err);
};