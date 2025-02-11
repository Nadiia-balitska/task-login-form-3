// Modal Handling
function openModal() {
  document.getElementById('modal').style.display = 'block';
  document.body.classList.add('no-scroll');
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.body.classList.remove('no-scroll');
}

window.onclick = function (event) {
  let modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};

window.openModal = openModal;
window.closeModal = closeModal;
