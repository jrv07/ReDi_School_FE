const hello = "Hello";
console.log(hello)

const firstNum = 5;
const secondNum = 10;

const doSomethingElse = (a, b) => {
    console.log(
      `this function console logs the number ${a} to the power of ${b}, which is ` +
        Math.pow(a, b)
    );
  };
  
  doSomethingElse(firstNum, secondNum);
