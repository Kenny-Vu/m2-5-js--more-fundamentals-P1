// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

let btnList = [...document.querySelectorAll("button")];
let btnUL = document.getElementById("btn-list");

//initialize buttons
const initializeBtn = (arr) => {
  arr.forEach((element) => {
    element.style.backgroundColor = "gold";
  });
  arr[arr.length - 1].style.backgroundColor = "";
  btnUL.addEventListener("click", clickButton);
};

//toggle color
const toggleColor = (id) => {
  let btn = document.getElementById(id);
  switch (id) {
    case "btn-2":
      btn.style.backgroundColor === "crimson"
        ? (btn.style.backgroundColor = "gold")
        : (btn.style.backgroundColor = "crimson");
      break;
    case "btn-3":
      btn.style.backgroundColor === "lightblue"
        ? (btn.style.backgroundColor = "gold")
        : (btn.style.backgroundColor = "lightblue");
    default:
      break;
  }
};

//logic for reset button
const resetBtn = (arr) => {
  initializeBtn(arr);
  arr[0].style.opacity = "100";
  arr[btnList.length - 2].classList.remove("jitters");
};

// function for event handler
const clickButton = (event) => {
  btnId = event.target.id;
  btn = document.getElementById(btnId);
  switch (btnId) {
    case "btn-1":
      btn.style.opacity === "0"
        ? (btn.style.opacity = "100")
        : (btn.style.opacity = "0");
      break;
    case "btn-2":
      toggleColor(btnId);
      break;
    case "btn-3":
      toggleColor(btnId);
      break;
    case "btn-4":
      btn.classList.toggle("jitters");
      break;
    case "reset":
      resetBtn(btnList);
      break;
    default:
      break;
  }
};

initializeBtn(btnList);
