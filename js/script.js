let tri = document.querySelector(".triangle");
let box = document.querySelector(".mobile-dropdown");
tri.addEventListener("click", Dropdown);
function Dropdown(e) {
  let triUp = document.querySelector(".triangle-up");
  let triDown = document.querySelector(".triangle-down");
  e.target.classList.toggle("triangle-up");
  e.target.classList.toggle("triangle-down");
  document.querySelectorAll(".border").forEach(function (item) {
    item.classList.toggle("hidden");
  });
}
