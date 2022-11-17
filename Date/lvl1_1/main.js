let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800);
let date4 = new Date(86400000);

let date1El = document.querySelector("#date1");
let date2El = document.querySelector("#date2");
let date3El = document.querySelector("#date3");
let date4El = document.querySelector("#date4");

date1El.innerHTML = date1;
date2El.innerHTML = date2;
date3El.innerHTML = date3;
date4El.innerHTML = date4;