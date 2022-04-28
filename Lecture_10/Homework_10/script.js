/* Home Work 2: Split the numeric array odd/even*/

const array_of_numbers = [1, 5, 6, 7, 10, 11, 12];
const array_odd_numbers = []; /* Empty Array*/
const array_even_nubers = []; /* Empty Array*/

function ArraySeperatorOddandEvenNumbers (input_array) {
  for (let index=0; index < array_of_numbers.length; index=index+1) {
    let number = array_of_numbers[index]
    if (number%2==0) {
      array_even_nubers[array_even_nubers.length] = number;
    }
    else {
      array_odd_numbers[array_odd_numbers.length] = number;
    }
  }
  console.log(array_of_numbers);
  console.log(array_even_nubers);
  console.log(array_odd_numbers);
  return(array_of_numbers, array_even_nubers, array_odd_numbers);
}

/* ArraySeperatorOddandEvenNumbers(input_array=array_of_numbers) */

/* Home Work 1: Scrabble score*/

const score_1 = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
const score_2 = ['D', 'G'];
const score_3 = ['B', 'C', 'M', 'P'];
const score_4 = ['F', 'H', 'V', 'W', 'Y'];
const score_5 = ['K'];
const score_8 = ['J', 'X'];
const score_10 = ['Q', 'Z'];
let score = 0; 

const input_word = 'cabbage'

function ScrabbleScore (word) {
  input_word_uppercase = word.toUpperCase();
  /*console.log(input_word_uppercase);*/
  for (let i = 0; i < word.length; i++) {
    letter = input_word_uppercase[i];
    /*console.log(letter)*/
    for (let a = 0; a < score_1.length; a++) {
      if (letter === score_1[a]) {
        score = score + 1;
        /*console.log(score);*/
      }
    }
    for (let b = 0; b < score_2.length; b++) {
      if (letter === score_2[b]) {
        score = score + 2;
        /*console.log(score);*/
      }
    }
    for (let c = 0; c < score_3.length; c++) {
      if (letter === score_3[c]) {
        score = score + 3;
        /*console.log(score);*/
      }
    }
    for (let d = 0; d < score_4.length; d++) {
      if (letter === score_4[d]) {
        score = score + 4;
        /*console.log(score);*/
      }
    }
    for (let e = 0; e < score_5.length; e++) {
      if (letter === score_5[e]) {
        score = score + 5;
        /*console.log(score);*/
      }
    }
    for (let f = 0; f < score_8.length; f++) {
      if (letter === score_8[f]) {
        score = score + 8;
        /*console.log(score);*/
      }
    }
    for (let g = 0; g < score_10.length; g++) {
      if (letter === score_10[g]) {
        score = score + 10;
        /*console.log(score);*/
      }
    }
  }
  console.log(score);
}

ScrabbleScore(word=input_word)