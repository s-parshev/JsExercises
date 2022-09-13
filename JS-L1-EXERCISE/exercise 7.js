//Напишете конзолна програма, която приема число през prompt и
//връща в конзолата сбора на 2-те предходни числа преди зададеното. Напр: 5 => 7 (3 + 4)
const sumOfTwoPreviousNumbers = () => {
  const input = prompt("enter number:");
  const number = parseInt(input);
  const calculateSum = (number) => {
    let result = 0;
    let i = 1;
    while (true) {
      if (i === 3) {
        break;
      }
      if (number > 0) {
        result += number - i;
        i++;
      } else {
        result += number + i;
        i++;
      }
    }
    return result;
  };
  console.log(calculateSum(number));
};
