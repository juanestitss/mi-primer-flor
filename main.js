window.onload = () => {
  const c = setTimeout(() => {
    document.querySelector("main").classList.remove("not-loaded");
    clearTimeout(c);
  }, 2000);
};

// Function popup
function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

// function reopenPopup() {
//   var popup = document.getElementById("popup");
//   var reopenBtn = document.getElementById("reopenBtn");
//   popup.style.display = "block";
// }

function reopenPopup() {
  var popup = document.getElementById("popup");
  var reopenBtn = document.getElementById("reopenBtn");
  popup.style.display = "block";

  
}

document.addEventListener("DOMContentLoaded", function () {
  // Espera 4 segundos antes de mostrar el popup
  setTimeout(function () {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }, 8000);
  setTimeout(function () {
    var popup = document.getElementById("reopenBtn");
    popup.style.display = "block";
  }, 8000);
});
