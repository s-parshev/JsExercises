const nearestToOneHundred = () => {
  const result = () => {
    const firstValue = prompt("enter first value:", 0);
    const secondValue = prompt("enter second value:", 0);
    if (100 - firstValue < 100 - secondValue) {
      return firstValue;
    } else {
      return secondValue;
    }
  }
  console.log(result());
};

