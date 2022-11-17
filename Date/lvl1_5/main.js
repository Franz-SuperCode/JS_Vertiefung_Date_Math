let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let date1 = new Date("2022-12-12");
console.log(date1);
console.log(date1.getMonth());
// An der Position im Array den Wert ausgeben
let numberOfMonth = list[date1.getMonth()];
console.log(numberOfMonth);

