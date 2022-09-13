//Напишете конзолна програма, която превръща годините в дни.
const yearsToDays=()=>{
    const input = prompt("enter years ", 1);
    const years = parseInt(input);
    const convertYearsToDays = (years)=>{
        return years*365;
    }
    console.log(convertYearsToDays(years));
}