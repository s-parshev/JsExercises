const truttyFalsyValue = ()=>{
    const userInput = prompt("enter value:");
    const evaluation = (userInput)=>{
        if(userInput> 0){
            return "true";
        }else if(userInput<0){
            return "false";
        }else{
            return "null";
        }
        
    }
    console.log(evaluation(userInput))
}