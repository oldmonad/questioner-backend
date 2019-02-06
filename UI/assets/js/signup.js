const apiUrl = 'https://enigmatic-refuge-95413.herokuapp.com/api/v1/auth/signup';
const windowUrlArray = window.location.href.split('/');
windowUrlArray.pop();
const windowUrl = windowUrlArray.join('/');
const first_name = document.querySelector('#firstname');
const last_name = document.querySelector('#lastname');
const e_mail = document.querySelector('#email');
const phone_number = document.querySelector('#phonenumber');
const user_name = document.querySelector('#username');
const pass_word = document.querySelector('#password');
const confirm_password = document.querySelector('#confirmPassword');

const showOverlay = () => {
  document.querySelector('.loading').style.display = 'block';
};

const hideOverlay = () => {
  document.querySelector('.loading').style.display = 'none';
};

const inputFields = [
  first_name, last_name, e_mail, phone_number,
  user_name, pass_word, confirm_password,
];


function showAlert(message, className) {
  const div = document.createElement('div');
  //Add ClassName
  div.className = `alert ${className}`;
  const p = document.createElement("p");
  p.appendChild(document.createTextNode(message));
  div.appendChild(p);

  const container = document.querySelector('.signup--section');
  const form = document.getElementById('signup--form');

  //Insert alert
  container.insertBefore(div, form);
  //Timeout after 5 seconds
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 5000);
}


function clearAlert() {
  document.getElementById('number').value = '';
}


const removeClass = (errorclass) => {
  const errorText = document.querySelector(errorclass);
  if (errorText) {
    errorText.previousSibling.remove();
    errorText.nextSibling.remove();
    errorText.remove();
  }
};



const inputErrorHandler = (errorArray, errorData) => {
  errorArray.forEach((errorKey) => {
    const errorId = `${errorKey}`;
    const checkFieldError = inputFields.find(field => field.id === errorId);
    removeClass(`.${errorId}`);
    checkFieldError.insertAdjacentHTML('afterend', `
    <p class="${errorId}" id="red">${errorData[errorId][0]}</p><br>
    `);
  });
};


const emailErrorHandler = (errorData) => {
  removeClass('.emailerror');
  e_mail.insertAdjacentHTML('afterend', `
  <p class="emailerror" id="red">${errorData}</p><br>
  `);
};

const usernameErrorHandler = (errorData) => {
  removeClass('.usernameerror');
  user_name.insertAdjacentHTML('afterend', `
  <p class="usernameerror" id="red">${errorData}</p><br>
  `);
};



// function validation() {
//   const password = pass_word.value;
//   const confirmPassword = confirm_password.value;



// }



const register = async (e) => {
  e.preventDefault();



  const firstname = first_name.value;
  const lastname = last_name.value;
  const email = e_mail.value;
  const phonenumber = phone_number.value;
  const username = user_name.value;
  const password = pass_word.value;
  const confirmPassword = confirm_password.value;

  if (password !== confirmPassword) {
    document.getElementById('password-error').innerHTML = "The passwords are not matching";
    return false;
  }

  showOverlay();
  const userInput = {
    firstname,
    lastname,
    username,
    email,
    password,
    confirmPassword,
    phonenumber,
  };

  await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(userInput),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then((data) => {
      hideOverlay()
      if (data.error) {
        if (data.status === 400) {
          console.log(data)
          const errorData = data.error;
          const errorArray = Object.keys(errorData);
          return inputErrorHandler(errorArray, errorData);
        }
        if (data.status === 409) {
          const errorData = data.error;

          if (errorData.includes('email')) return emailErrorHandler(errorData);
          return usernameErrorHandler(errorData);
        }
      }

      if (data.status === 201) {
        showAlert('Account created successfully you would be redirected to the login page', 'success');
        setTimeout(() => {
          window.location.href = `${windowUrl}/login.html`;
        }, 3000);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const signup = document.querySelector('#signup--form');
signup.addEventListener('submit', register);