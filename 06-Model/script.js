"use strict";

const modal = document.querySelector(".modal");
const btnCloseModel = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal");
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModel = function () {
  modal.classList.remove("hidden"); // equal to modal.style.display = 'block' only work for one attr
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModel); // not calling openModel , just declare it (defined it)
}

overlay.addEventListener("click", closeModal);
btnCloseModel.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
