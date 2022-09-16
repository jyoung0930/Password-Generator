const lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = [
  "`",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
];
const sliderValueText = document.querySelector(".slider-value");
const sliderInput = document.querySelector(".slider");
const checkbox = document.querySelectorAll("input[type=checkbox]");
const form = document.getElementById("submit");
const generatedPassword = document.querySelector(".generated-password");
const strengthBars = document.querySelectorAll(".bar");

// Generate Password
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let passsWord = [];
  for (let i = 0; i <= sliderInput.value; i++) {
    if (checkbox[0].checked === true) {
      passsWord.push(
        upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
      );
    }
    if (checkbox[1].checked === true) {
      passsWord.push(
        lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
      );
    }

    if (checkbox[2].checked === true) {
      passsWord.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (checkbox[3].checked === true) {
      passsWord.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
  }
  passsWord = passsWord
    .sort(() => 0.5 - Math.random())
    .slice(0, sliderInput.value)
    .join("");
  generatedPassword.textContent = passsWord;
});

// Dispaly slider value
sliderInput.addEventListener("change", () => {
  sliderValueText.textContent = sliderInput.value;
});

// Check how many checkboxes are true and update strength bars
checkbox.forEach((box) => {
  box.addEventListener("change", () => {
    let strengthBarArray = Array.from(strengthBars);
    let checkedBoxes = [];
    for (let i = 0; i < checkbox.length; i++) {
      strengthBarArray[i].style.backgroundColor = "none";
    }

    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        checkedBoxes.push(i);
      }
    }

    if (checkedBoxes.length - 1 === -1) {
      strengthBarArray[0].style.backgroundColor = "red";
      strengthBarArray[1].style.backgroundColor = "red";
    }

    console.log(checkbox[0]);
    console.log(checkedBoxes.length - 1);
    // strengthBars[1].style.backgroundColor = "pink";
    console.log(strengthBarArray.slice(0, 2));
  });
});

// Slider Logic

const slider = document.getElementById("myinput");
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, #a4ffaf 0%, #a4ffaf ${
  ((value - min) / (max - min)) * 100
}%,#18171f ${((value - min) / (max - min)) * 100}%, #18171f 100%)`;

slider.oninput = function () {
  this.style.background = `linear-gradient(to right, #a4ffaf 0%, #a4ffaf ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%,#18171f ${
    ((this.value - this.min) / (this.max - this.min)) * 100
  }%, #18171f 100%)`;
};
