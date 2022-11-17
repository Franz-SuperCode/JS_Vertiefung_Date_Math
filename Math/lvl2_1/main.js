function roundTo(zahl, genauigkeit) {
    let ergebnis = zahl.toFixed(genauigkeit);
    console.log(ergebnis);
}

roundTo(5.3434353, 2);
roundTo(5.3434353, 3);
roundTo(5.3434353, 4);