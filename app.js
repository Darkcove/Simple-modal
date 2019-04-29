const btn = document.querySelectorAll(".modal");
const modalTog = document.querySelector(".modal_wrapper");
const body = document.querySelector("body");

btn.forEach(function(button) {
  makeClick(button);
});

function makeClick(el) {
  el.addEventListener("click", function() {
    modalTog.classList.add("showModal");
    const closeModal = document.querySelector(".close");
    closeModal.addEventListener("click", function() {
      return modalTog.classList.remove("showModal");
    });
    modalTog.addEventListener("click", function() {
      return modalTog.classList.remove("showModal");
    });
    body.addEventListener("keydown", function(e) {
      if (e.keyCode === 27) {
        return modalTog.classList.remove("showModal");
      }
    });
  });
}
