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

// Generate Password
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let passsWord = [];
  for (let i = 0; i <= sliderInput.value; i++) {
    if (checkbox[0].checked === true) {
      passsWord.push(
        upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
      );
      console.log("running1");
    }
    if (checkbox[1].checked === true) {
      passsWord.push(
        lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
      );
      console.log("running2");
    }

    if (checkbox[2].checked === true) {
      passsWord.push(numbers[Math.floor(Math.random() * numbers.length)]);
      console.log("running3");
    }
    if (checkbox[3].checked === true) {
      passsWord.push(symbols[Math.floor(Math.random() * symbols.length)]);
      console.log("running4");
    }
  }
  passsWord = passsWord
    .sort(() => 0.5 - Math.random())
    .slice(0, sliderInput.value)
    .join("");
  generatedPassword.textContent = passsWord;
});
console.log(typeof lowerCaseLetters);
// Dispaly slider value
sliderInput.addEventListener("change", () => {
  sliderValueText.textContent = sliderInput.value;
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
