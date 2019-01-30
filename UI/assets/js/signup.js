function showLoader() {
  document.querySelector('.loading').style.display = 'block';
}

function hideLoader() {
  document.querySelector('.loading').style.display = 'none';
}


const url = 'https://enigmatic-refuge-95413.herokuapp.com/auth/signup';

function resetInputFields() {
  const InputFields = document.querySelectorAll('.error');
  const InputFieldsArray = Array.prototype.slice.call(InputFields);
  InputFieldsArray.forEach((element) => {
    const currentField = element;
    currentField.innerHTML = '';
  });
}