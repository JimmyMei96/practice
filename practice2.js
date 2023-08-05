//PRACTICE

// let arr = [1, 2, 3];
// function addValue() {
//   arr.push(4);
//   console.log(arr);
// }
// addValue();

// let arr = [1, 2, 3];
// function removeLastValue() {
//   arr.pop();
//   console.log(arr);
// }
// removeLastValue();

// let arr = [1, 2, 3];
// function removeFirstValue() {
//   arr.shift();
//   console.log(arr);
// }
// removeFirstValue();

// let arr = [1, 2, 3];
// function prependValue() {
//   arr.unshift("Jimmy");
//   console.log(arr);
// }
// prependValue();

// let arr = [1, 2, 3];
// function modifyArray() {
//   arr.shift();
//   arr.unshift("JavaScript");
//   arr.pop();
//   arr.push("Programming");
//   console.log(arr);
// }
// modifyArray();

//CONCAT AND JOIN

// const arr1 = ["Java", 2, 3];
// const arr2 = [true, 5, "Coffee"];
// const arr3 = arr2.concat(arr1);
// console.log(arr3.length);

// const arr4 = ["Red", "Orange", "Yellow", "Green"];
// console.log(arr4.join("-"));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = arr1.concat(arr2);
// function mergeArrays() {
//   console.log(arr3);
// }
// mergeArrays();

// let arr = ["Hello", "World"];
// let str = arr.join(" ");
// function arrayToString() {
//   console.log(str);
// }
// arrayToString();

// let arr = ["Hello", "World"];
// let str = arr.join("-");
// function joinWithHyphen() {
//   console.log(str);
// }
// joinWithHyphen();

// let arr1 = ["Red", "Orange"];
// let arr2 = ["Yellow", "Green"];
// let arr3 = arr1.concat(arr2);
// let str = arr3.join(" ");
// function joinAndConcat() {
//   console.log(str);
// }
// joinAndConcat();

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];
// let arr4 = arr1.concat(arr2.concat(arr3));
// function aryOfArrays() {
//   console.log(arr4);
// }
// aryOfArrays();

//OBJECTS
const game = {
  name: "Valorant",
  genre: "First-person Shooter",
  price: 0,
};
game.year = 2020;
game.genre = "Third-person Shooter";
delete game.price;

// console.log(game);

const window = {
  isOpen: false,
  openWindow: function () {
    this.isOpen = true;
  },
  closeWindow: function () {
    this.isOpen = false;
  },
};

console.log(window.isOpen);
