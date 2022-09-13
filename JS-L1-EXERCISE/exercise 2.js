const avgValue = () => {
  const calculateAvgValue = () => {
    const firstNumber = prompt("enter first value:", 0);
    const secondNumber = prompt("enter second value:", 0);
    console.log(firstNumber, secondNumber);
    const result = Math.ceil((parseInt(firstNumber) + parseInt(secondNumber)) / 2);
    return result;
  };
  console.log(calculateAvgValue());
};
