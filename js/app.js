"use strict";

const shareBtn = document.querySelector(".svg-container");
const dialog = document.querySelector(".share-dialog");

shareBtn.addEventListener("click", function () {
  dialog.classList.toggle("d-none");

  if (window.innerWidth >= 975) {
    dialog.classList.remove("share-dialog-sm");
    dialog.classList.toggle("share-dialog-xl");
  } else {
    dialog.classList.remove("share-dialog-xl");
    dialog.classList.toggle("share-dialog-sm");
  }
});

function reportWindowSize() {
  dialog.classList.add("d-none");
  dialog.classList.add("d-none");
}

window.onresize = reportWindowSize;
