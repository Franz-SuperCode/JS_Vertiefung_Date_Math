let date1 = new Date(1999, 10, 5, 15); //PM
let date2 = new Date();
let date3 = new Date(2019, 12, 3, 12); //AM
let date4 = new Date(2000, 1, 1, 11); //AM


function getHours(theDate) {
    let hours = theDate.getHours();
    return hours;
}
let uhrzeit = getHours(date4);

if (uhrzeit < 12) {
    console.log("AM");
} else {
    console.log("PM");
}

