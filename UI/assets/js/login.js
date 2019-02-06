const windowUrlArray = window.location.href.split('/');
windowUrlArray.pop();
const windowUrl = windowUrlArray.join('/');
const apiUrl = 'https://enigmatic-refuge-95413.herokuapp.com/api/v1/auth/login';
const loginForm = document.querySelector('.custom--form');
const e_mail = document.querySelector('#email');
const pass_word = document.querySelector('#password');
const submitBtn = document.querySelector('#submit');


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


const login = async (e) => {
  e.preventDefault();
  showOverlay();
  const email = e_mail.value;
  const password = pass_word.value;

  const userLogin = {
    email,
    password
  };

  await fetch(apiUrl, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(userLogin),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then((response) => {
      hideOverlay();

      if (response.status === 400) {
        return showAlert('Incorrect email or password', 'error');
      }
      if (response.status === 401) {
        return showAlert('Incorrect email or password', 'error');
      }

      if (response.status === 200) {
        showAlert(`${response.message}`, 'success');
        const {
          data,
        } = response;

        localStorage.setItem('user', JSON.stringify(data));

        window.location.href = `${windowUrl}/meetups.html`;
      }
      return true;
    })
    .catch((err) => {
      console.log(err);
    });
};

loginForm.addEventListener('submit', login);