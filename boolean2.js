//console.log(true && true);
//console.log(true && false);
//console.log(false && false);

//console.log(true || true);
//console.log(true || false);
//console.log(false || false);

// PASSWORD CHECKER

function strongPassword(password) {
  if (password === "strong-password") {
    return true;
  } else {
    return false;
  }
}
// console.log(strongPassword("strong-password"));

// NUMBER CHECKER

function numberChecker(number1, number2) {
  if (number1 > 0 && number2 > 0) {
    return true;
  } else return false;
}
//console.log(numberChecker(43, 6));

function forLoop() {
  for (let i = 0; i < 100; i = i + 1) {
    if (i % 2 === 0) {
      console.log(i * i);
    }
    if (i % 2 === 1) {
      console.log("odd", i);
    }
  }
}
// forLoop();
