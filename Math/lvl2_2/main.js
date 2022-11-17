let buttonEl = document.querySelector("#button");
buttonEl.addEventListener("click", () => {

    let inputEl = Number(document.querySelector("#number").value);

    console.log(inputEl);

    let randomNumber = Math.floor((Math.random() * 10) + 1);
    console.log(randomNumber);


    if (inputEl === randomNumber) {
        console.log("Erraten");
    } else {
        console.log("Falsch geraten");
    }
})
