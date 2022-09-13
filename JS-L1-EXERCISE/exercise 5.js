const testPoint = () => {
  const calculateScore = () => {
    const pointsOfStudent = prompt("enter test point(0 - 100 ):", 0);
    const result = parseInt(pointsOfStudent);
    switch (true) {
      case result <= 40:
        return 2;
        break;
      case result >= 41 && result <= 60:
        return 3;
        break;
      case result >= 61 && result <= 80:
        return 4;
        break;
      case result >= 81 && result <= 90:
        return 5;
        break;
      case result >= 91 && result <= 100:
        return 6;
        break;
      default:
        return "invalid points value!!!";
        break;
    }
  }
  console.log(calculateScore());
};

