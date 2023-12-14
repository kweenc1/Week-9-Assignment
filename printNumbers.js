//Build a simple loop, that print numbers to the console. from 0 to the lenght of an array.
function printNumbers(numbers) {
    for (let inc = 0; inc < numbers.length; inc++) {
      console.log(numbers[inc]);
    }
  }
  
  let theNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  printArray(theNumbers);