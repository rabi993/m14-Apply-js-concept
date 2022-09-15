// const year =3566;

// let part=year%4;
// if(part==0){
//     console.log( "leap year");
// }
// else{
//     console.log( 'normal year not leap year');
// }

function isLeapYear(year){
    const part=year%4;
    const part2 = year%400;
    if(part==0 && part2==0){
        return true
    }
    else{
        return false;
    }
}
const checkLeapYear = isLeapYear(2000);
console.log(checkLeapYear);
const checkLeapYear1 = isLeapYear(1700);
console.log(checkLeapYear1);
const checkLeapYear2 = isLeapYear(1800);
console.log(checkLeapYear2);
const checkLeapYear3 = isLeapYear(1900);
console.log(checkLeapYear3);
const checkLeapYear4 = isLeapYear(2040);
console.log(checkLeapYear4);