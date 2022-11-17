let monate = [
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

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];
// UHR LÄUFT mit refreshtime und setIntervall!
function refreshTime() {
    let date1 = new Date();
    let day = date1.getDay();
    let hours = date1.getHours();
    let minutes = date1.getMinutes();
    let seconds = date1.getSeconds();
    let year = date1.getFullYear();
    let month = date1.getMonth();
    // console.log(year, month, day, hours);
    // console.log(monate[month]);
    // console.log(wochenTag[day]);

    let pEl = document.querySelector("#output");
    // console.log(pEl);

    if (hours < 12) {
        pEl.innerHTML = `${wochenTag[day]} ${hours} : ${minutes} : ${seconds} AM`
    } else {
        pEl.innerHTML = `${wochenTag[day]} ${hours} : ${minutes} : ${seconds} PM`
    }
}
setInterval(refreshTime, 1000);
