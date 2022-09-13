/**Напишете конзолна програма, която калкулира точките в баскетболна игра. 
 * Използвайте функция, която очаква 2 параметъра - 
 * calculateBasketballPoints(twoPointers, threePointers)  */

const calculatePoints=()=>{
    const twoPointsInput = prompt("enter two-points ", 0);
    const threePointsInput = prompt("enter three-points ", 0);
    let result = 0;
    const twoPointers = parseInt(twoPointsInput);
    const threePointers = parseInt(threePointsInput);
    const calculateBasketballPoints = (twoPointers, threePointers)=>{
        result = (2*twoPointers)+(3*threePointers);
        return result ;
    }
    console.log(calculateBasketballPoints(twoPointers, threePointers));
}