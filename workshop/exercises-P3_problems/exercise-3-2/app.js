// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

let btnList = [...document.querySelectorAll("button")];
console.log(btnList);

const InitializeBtn = (arr) => {
  arr.forEach(function (button) {
    button.style.backgroundColor = "gold";
    button.addEventListener("click", toggleColor);
  });
};

const toggleColor = (event) => {
  let btnId = event.target.id;
  let btn = document.getElementById(btnId);
  switch (btnId) {
    case "btn-1":
      btn.style.opacity === "0"
        ? (btn.style.opacity = "100")
        : (btn.style.opacity = "0");
      break;
    case "btn-2":
      btn.style.backgroundColor === "crimson"
        ? (btn.style.backgroundColor = "gold")
        : (btn.style.backgroundColor = "crimson");
      break;
    case "btn-3":
      btn.style.backgroundColor === "lightblue"
        ? (btn.style.backgroundColor = "gold")
        : (btn.style.backgroundColor = "lightblue");
      break;
    case "btn-4":
      btn.classList.toggle("jitters");
      break;
    default:
      break;
  }
};

InitializeBtn(btnList);
