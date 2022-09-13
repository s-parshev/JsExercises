/**Фермер отглежда 3 вида животни - кокошки, прасета и крави. 
 * Напишете конзолна програма, която приемайки броя на животните от всеки вид, 
 * пресмята колко крака има всяко животно. 
 */
const animalsLegs=()=>{
    
    let cow, chiken,pig;
    do{
    chiken = parseInt(prompt("enter chiken: "));
    cow = parseInt(prompt("enter cow "));
    pig = parseInt(prompt("enter pig "));
    if((chiken<0) || (cow<0) || (pig<0)){
        alert("negative value!!!")
    }
    }while((chiken<0) || (cow<0) || (pig<0));
    let totalAnimalsLegs = 0;
    const calculateAnimalsLegs = (chiken, cow, pig)=>{
        totalAnimalsLegs = (2*chiken)+(4*cow)+(4*pig);
        return totalAnimalsLegs;
    }
    console.log(calculateAnimalsLegs(chiken, cow, pig));
}