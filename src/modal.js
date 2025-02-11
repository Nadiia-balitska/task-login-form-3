// Modal Handling
window.openModal = function () {
  document.getElementById('modal').style.display = 'block';
  document.body.classList.add('no-scroll');
};

window.closeModal = function () {
  document.getElementById('modal').style.display = 'none';
  document.body.classList.remove('no-scroll');
};

window.onclick = function (event) {
  let modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};
