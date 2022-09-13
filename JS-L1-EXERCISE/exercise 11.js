const sumOfNumbers = () =>{
    const number = parseInt(prompt("enter number"));
    const calculateSum = (number)=>{
        let result =0;
        for(let i=0;i<=number;i++){
            result+=i;
        }
        return result;
    }
    console.log(calculateSum(number));
}