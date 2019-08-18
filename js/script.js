document.getElementById("signup").addEventListener("click", function() {
  openModal("signup_modal");
});
document.getElementById("signup_close").addEventListener("click", function() {
  closeModals("signup_modal");
});

document.getElementById("signup_cancel").addEventListener("click", function() {
  closeModals("signup_modal");
});

document.getElementById("login").addEventListener("click", function() {
  openModal("login_modal");
});
document.getElementById("login_close").addEventListener("click", function() {
  closeModals("login_modal");
});

document.getElementById("login_cancel").addEventListener("click", function() {
  closeModals("login_modal");
});

function openModal(target) {
  var $target = document.getElementById(target);
  $target.classList.add("is-active");
}

function closeModals(target) {
  var $target = document.getElementById(target);
  $target.classList.remove("is-active");
}
