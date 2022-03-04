"use strict";

const newColors = document.querySelector("#newcolors");
const easY = document.querySelector("#easy");
const harD = document.querySelector("#hard");
const codeR = document.querySelector("#coder");
const codeG = document.querySelector("#codeg");
const codeB = document.querySelector("#codeb");

easY.style.display = "none";
harD.style.display = "none";
document.querySelector("#great").style.display = "none";

let r = Math.trunc(Math.random() * 255) + 1;
let g = Math.trunc(Math.random() * 255) + 1;
let b = Math.trunc(Math.random() * 255) + 1;
codeR.textContent = r;
codeG.textContent = g;
codeB.textContent = b;

const ok = function (a) {
  document.getElementById(a).style.display = "none";
};
for (let i = 1; i <= 6; i++) {
  ok(`b${i}`);
}
document.getElementById("texting").style.display = "none";

function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const sk = function (a) {
  document.getElementById(a).style.display = "block";
};

const hide = function () {
  for (let i = 1; i <= 3; i++) {
    sk(`b${i}`);
  }
};

const hidden = function () {
  for (let i = 1; i <= 6; i++) {
    sk(`b${i}`);
  }
};

const hello = function () {
  for (let i = 1; i <= 6; i++) {
    ok(`b${i}`);
  }
  document.getElementById("texting").textContent =
    "CORRECTLY GUESSED THE COLOR!";
  document.body.style.backgroundColor = rgbToHex(r, g, b);
  newColors.style.display = "block";
  document.getElementById("texting").style.display = "block";
};
//console.log(r, g, b);
let Num;
easY.addEventListener("click", function () {
  easY.style.display = "none";
  harD.style.display = "none";
  Num = Math.trunc(Math.random() * 3) + 1;
  hide();
  console.log(Num);
  for (let i = 1; i <= 3; i++) {
    if (i !== Num) {
      document.getElementById(`b${i}`).style.backgroundColor =
        generateRandomColor();
    }
  }
  //let p = rgbToHex(r, g, b);
  document.getElementById(`b${Num}`).style.backgroundColor = rgbToHex(r, g, b);
  console.log(r, g, b);
  document.getElementById("texting").style.display = "none";
});
harD.addEventListener("click", function () {
  easY.style.display = "none";
  harD.style.display = "none";
  Num = Math.trunc(Math.random() * 6) + 1;
  hidden();
  console.log(Num);
  for (let i = 1; i <= 6; i++) {
    if (i !== Num) {
      document.getElementById(`b${i}`).style.backgroundColor =
        generateRandomColor();
    }
  }
  //let p = rgbToHex(r, g, b);
  document.getElementById(`b${Num}`).style.backgroundColor = rgbToHex(r, g, b);
  document.getElementById("texting").style.display = "none";
});

document.getElementById("b1").addEventListener("click", function () {
  if (`b${Num}` === "b1") {
    hello();
  } else {
    document.getElementById("b1").style.display = "none";
  }
});
document.getElementById("b2").addEventListener("click", function () {
  if (`b${Num}` === "b2") {
    hello();
  } else {
    document.getElementById("b2").style.display = "none";
  }
});
document.getElementById("b3").addEventListener("click", function () {
  if (`b${Num}` === "b3") {
    hello();
  } else {
    document.getElementById("b3").style.display = "none";
  }
});
document.getElementById("b4").addEventListener("click", function () {
  if (`b${Num}` === "b4") {
    hello();
  } else {
    document.getElementById("b4").style.display = "none";
  }
});
document.getElementById("b5").addEventListener("click", function () {
  if (`b${Num}` === "b5") {
    hello();
  } else {
    document.getElementById("b5").style.display = "none";
  }
});
document.getElementById("b6").addEventListener("click", function () {
  if (`b${Num}` === "b6") {
    hello();
  } else {
    document.getElementById("b6").style.display = "none";
  }
});

newColors.addEventListener("click", function () {
  easY.style.display = "block";
  harD.style.display = "block";
  document.querySelector("#great").style.display = "block";
  newColors.style.display = "none";

  // for (let i = 1; i <= 6; i++) {
  //   ok(`b${i}`);
  // }
  document.getElementById("texting").style.display = "none";
  r = Math.trunc(Math.random() * 255) + 1;
  g = Math.trunc(Math.random() * 255) + 1;
  b = Math.trunc(Math.random() * 255) + 1;
  codeR.textContent = r;
  codeG.textContent = g;
  codeB.textContent = b;
  document.body.style.backgroundColor = rgbToHex(219, 93, 100);
});
