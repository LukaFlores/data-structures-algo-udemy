// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let counter = 0;

  for (let i = 0; i < n; i++) {
    let string = "";
    for (let j = 0; j < n; j++) {
      if (j <= counter) {
        string += "#";
      } else {
        string += " ";
      }
    }
    console.log(string);
    counter++;
  }
}

function steps1(n, row = 0, stair = "") {
  if (row === n) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    steps1(n, row + 1);
    return;
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair);
}

module.exports = steps1;
