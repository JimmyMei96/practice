function twentyNumbers() {
  for (let i = 1; i < 21; i = i + 1) {
    console.log(i);
  }
}
// twentyNumbers();

function oddNumbers() {
  for (let i = 1; i < 100; i = i + 2) {
    console.log(i);
  }
}
//oddNumbers();

const colors = ["Red", "Blue", "Yellow", "Purple", "Green"];
const sports = ["Basketball", "Soccor", "Football", "Baseball"];
const temperatures = [85, 83, 91, 78, 21, 54];

function myFavoriteColor(colors) {
  for (i = 0; i < colors.length; i = i + 1) {
    console.log("My favorite color is " + colors[i]);
  }
}

//myFavoriteColor(colors);

function favoriteSport(sports) {
  for (i = 0; i < sports.length; i = i + 1) {
    console.log("My favorite sport to play is " + sports[i]);
  }
}
//favoriteSport(sports);

function currentTemp(temperatures) {
  for (i = 0; i < temperatures.length; i = i + 1) {
    console.log("It is " + temperatures[i] + " degrees today.");
  }
}

currentTemp(temperatures);
