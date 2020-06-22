// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

let btnList = document.querySelector("#btn-list");

const activateButton = function (event) {
  let btnId = event.target.id;
  let btn = document.getElementById(btnId);
  console.log(btnId);
  console.log(btn);

  switch (btnId) {
    case "btn-1":
      btn.style.opacity = 0;
      break;
    case "btn-2":
      btn.style.backgroundColor = "crimson";
      break;
    case "btn-3":
      btn.style.backgroundColor = "lightblue";
      break;
    case "btn-4":
      btn.classList.add("jitters");
      break;
    default:
      break;
  }
};

btnList.addEventListener("click", activateButton);
