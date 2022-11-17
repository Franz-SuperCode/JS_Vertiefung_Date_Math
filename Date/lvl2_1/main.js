//Speichere hier das aktuelle Datum
let date1 = new Date();
console.log(date1);

//Ändere es ins deutsche Format
let german = date1.toLocaleDateString("de-DE");
console.log(german);

// Tag, Monat und Jahr einzeln holen. Danach mit beliebigem Zeichen trennen
let day = date1.getDay();
let month = date1.getMonth();
let year = date1.getFullYear();
let mitBindestrich = `${day}-${month}-${year}`;
let mitQuerstrich = `${day}/${month}/${year}`;


// Ins HTML schreiben
let outputEl1 = document.querySelector("#output1");
let outputEl2 = document.querySelector("#output2");
outputEl1.innerHTML = mitBindestrich;
outputEl2.innerHTML = mitQuerstrich;