// !!Test function!!
// expected input: array, callback function
// expected output: string
function fooBarBanana(arr, cb) {
  return cb(arr[0]);
}

// Return a list of all character names
// expected input: array
// expected output: array
function listCharacterNames(array) {
  // let names = [];
  // for (let i = 0; i < array.length; i++) {
  //   names.push(array[i].character.name);
    let names = array.map((val, i, array) => {
      return val.character.name;
    });
    return names;
  }
// names.push(array[0].character.name);
// names.push(array[1].character.name);
// names.push(array[2].character.name);
// names.push(array[3].character.name);
// names.push(array[4].character.name);
// names.push(array[5].character.name);
// names.push(array[6].character.name);
// names.push(array[7].character.name);
// names.push(array[8].character.name);
// names.push(array[9].character.name);
// return names;
  

// return a count of all characters where 'dead' is true
// expected input: array
// expected output: integer
function findOnlyDeadCharacters(array) {
   let names2 = [];
   for (let i = 0; i < array.length; i++) {
     if (array[i].dead === true) {
      names2.push(array[i].character.name);
      
    }
  }
 return names2;
}
// let nameArrayDead = array.map ((v, i, a) => {
//   if (v.dead === true) {
//     return v.character.name;
//   }
// });
// //console.log(nameArrayDead); ---> [
//   undefined, undefined,
//   undefined, undefined,
//   undefined, 'xVisco',
//   'xdukanx', undefined,
//   undefined, 'Dollarmaker'
// ]
//   }

// Return the character name of the player who has completed the most challenges
// expected input: array
// expect output: string "{ name } has completed the most challenges!"
function mostChallengesCompleted(array) {
  // let names3 = [];
  // for (let i = 0; i < array.length; i++) {
  //     names3.push(array[i].account.challenges.total);
      
  //   }
  //   console.log (names3);
  //   let winner = names3.indexOf(Math.max(...names3));
  //   return `${(array[winner].character.name)} has completed the most challenges!`;
let newArray3 = array.map((v, i, a) => {
  Math.max(...v.account.challenges.total);
})
}


////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////
////////////////// TESTS! IGNORE ME! //////////////////

if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (fooBarBanana) {
    module.exports.fooBarBanana = fooBarBanana;
  }
  if (listCharacterNames) {
    module.exports.listCharacterNames = listCharacterNames;
  }
  if (findOnlyDeadCharacters) {
    module.exports.findOnlyDeadCharacters = findOnlyDeadCharacters;
  }
  if (mostChallengesCompleted) {
    module.exports.mostChallengesCompleted = mostChallengesCompleted;
  }
}
