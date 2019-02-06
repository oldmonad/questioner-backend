const apiUrl = 'https://enigmatic-refuge-95413.herokuapp.com/api/v1/meetups';
const windowUrlArray = window.location.href.split('/');
windowUrlArray.pop();
const windowUrl = windowUrlArray.join('/');
const meetup_topic = document.getElementById('event-title');
const meetup_location = document.getElementById('address');
const meetup_date = document.getElementById('date');
const deleteBtn = document.getElementById('delete--meetup');

const {
  body,
} = window.document;

const showOverlay = () => {
  document.querySelector('.loading').style.display = 'block';
};

const hideOverlay = () => {
  document.querySelector('.loading').style.display = 'none';
};


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



const createMeetup = async (e) => {
  e.preventDefault();
  showOverlay();

  const meetupLocation = meetup_location.value;
  const meetupTopic = meetup_topic.value;
  const meetupDate = meetup_date.value;

  // User input data object
  const formData = {
    location: meetupLocation,
    topic: meetupTopic,
    happeningOn: meetupDate,
  };


  let userToken;
  if (localStorage.getItem('user')) {
    const userData = JSON.parse(localStorage.getItem('user'));
    const {
      token,
    } = userData;

    userToken = token;
  }


  await fetch(apiUrl, {
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
      window.location.reload();
      hideOverlay();

      // check for success status
      if (response.status === 201) {

      } else {
        console.log(response);

      }
    })
    .catch(err => err);
};




// Create new user account
const fetchMeetups = async () => {
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

  await fetch(apiUrl, {
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
        const meetups = response.data;
        let output = '';

        meetups.forEach((meetup) => {
          const creationDate = convertDate(meetup.created_on);
          const happeningOn = convertDate(meetup.happening_on);
          output += `	<div class="meetup">
        	<a class"single-meetup" href="meetup_questions.html?id=${meetup.id}" >
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
        				<p class="meetup--detail__information">www.imageurl.com</p>
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
        	</a>
        </div>`;
        });


        const meetupContainer = document.getElementById('meetups--container');
        meetupContainer.innerHTML = output;
      }
      if (response.status === 404) {
        console.log(response)
        hideOverlay();
      }
    })
    .catch(err => err);
};



body.addEventListener('load', fetchMeetups());
const createMeetupForm = document.getElementById('meetup--custom__form');
createMeetupForm.addEventListener('submit', createMeetup);