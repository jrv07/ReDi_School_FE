
/* Homework 2: Build a Traingle */

  function BuildPyramid (star, initiate_number, end_number) {
    for (let number = initiate_number; number <=end_number; number= number + 1) {
      console.log(star.repeat(number))
    }
  }

BuildPyramid(star='*', initiate_number=1, end_number=6)

/* Homework 3:  FizzBuzz*/

function FizzBuzz (start_number, end_number, fizz_condition, buzz_condition) {
  for (let number = start_number; number <= end_number; number= number + 1) {
    if (number % fizz_condition == 0) {
      console.log("Fizz")
    }
    if (number % buzz_condition == 0) {
      console.log("Buzz")
    }
    if (number % fizz_condition == 0 && number % buzz_condition == 0) {
      console.log("FizzBuzz")
    }
    else {
      console.log(number)
    }
  }
}

FizzBuzz(start_number = 0, end_number = 100, fizz_condition = 3, buzz_condition = 5)