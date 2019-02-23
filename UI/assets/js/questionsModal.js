const modal = document.getElementById('simpleModal');
const postQuestionModalBtn = document.getElementById('postQuestionModalBtn');
const closeQuestionBtn = document.getElementById('closeQuestionBtn');

postQuestionModalBtn.addEventListener('click', openModal);
closeQuestionBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}