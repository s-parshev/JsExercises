//convert Celsius to Fahrenheit
//(°C x 1.8) + 32 = °F
const convertCtoF = () => {
  const temp = prompt("enter temperature in Celsius:", 0);
  const convertCelsToFahr = (temp) => {
    const fahrenheitTemperature = (temp * 1.8) + 32;
    const intValue = parseInt(fahrenheitTemperature);
    const floatFixedValue = parseFloat(fahrenheitTemperature).toFixed(1);
    const presicion = (parseFloat(fahrenheitTemperature).toFixed(1)).split('.');
    if(parseInt(presicion[1]) === 0){
      if(parseInt(presicion[0])===0){
        return (Math.abs(intValue) + " \xB0F");
      }else{
        return (intValue + " \xB0F");
      }
    }else{
       return(floatFixedValue + " \xB0F")
    }
  };
  console.log(convertCelsToFahr(temp));
};
