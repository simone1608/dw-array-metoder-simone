document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // Opgave 1
    let newNumbers = numbersArray.filter(function (number) {
        return number > 20;
    });

    console.log(newNumbers);
    //Jeg bruger filter da den kalder alle elementerne tilbage og tjekker for vilke er sande og sender kun de sande ud igen. 

    // Opgave 2
    catsArray.push("sniffles")
    console.log(catsArray);
    //Jeg bruger push tager det nye element og tilføjer det til slutningen af arrayet og sender det nye array tilbage med den nye element.

    //opgave 3 a
    let hasTrixie = dogsArray.includes("Trixie");
    console.log(hasTrixie);

    //opgave 3 b
    let hasBaxter = dogsArray.includes("Baxter");
    console.log(hasBaxter);
    //Jeg bruger includes da det tjekker arrayet for om der er et specifikt element og derefter udskriver true eller false derudfra
}) // ends DOMContentLoaded