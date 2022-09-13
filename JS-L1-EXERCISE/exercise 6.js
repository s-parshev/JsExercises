//Напишете конзолна програма, която превръща минутите в секунди.
const minutesToSecond=()=>{
    const minutes = prompt("enter minutes:", 1);
    const convertMinToSec=(minutes)=>{
        return minutes*60;
    }
    console.log(convertMinToSec(minutes));
}