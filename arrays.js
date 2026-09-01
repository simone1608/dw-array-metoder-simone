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
    console.log("Opgave 1", newNumbers);
    //Jeg bruger filter da den kalder alle elementerne tilbage og tjekker for vilke er sande og sender kun de sande ud igen. 

    // Opgave 2
    catsArray.push("sniffles")
    console.log("Opgave 2", catsArray);
    //Jeg bruger push tager det nye element og tilføjer det til slutningen af arrayet og sender det nye array tilbage med den nye element.

    // Opgave 3 a
    let hasTrixie = dogsArray.includes("Trixie");
    console.log("Opgave 3a", hasTrixie);

    // Opgave 3 b
    let hasBaxter = dogsArray.includes("Baxter");
    console.log("Opgave 3b", hasBaxter);
    //Jeg bruger includes da det tjekker arrayet for om der er et specifikt element og derefter udskriver true eller false derudfra

    // Opgave 4 a
    let cat = catsArray.find(function (cat) {
        return cat === "Bagheera";
    });
    console.log("Opgave 4a", cat);

    // Opgave 4 b
    let cats = catsArray.find(function (cats) {
        return cats === "Salem";
    });
    console.log("Opgave 4b", cats);
    //Jeg brugte find da den ville gå igennenm alle elementerne og se om der var nogle der peaasede og sende dem ud hvis ikke sende ud undefined

    // Opgave 5
    let plusNumbers = numbersArray.map(function (number) {
        return number * 3;
    });
    console.log("Opgave 5", plusNumbers);
    //Jeg brugte map da det laver et nyt array med resultatet med den function der er kaldt

    // Opgave 6
    let dogs = dogsArray.join("");
    console.log("Opgave 6", dogs);
    //Jeg brugte join da det tager alle elementerne og ligger dem ved siden af hinnaden og kan sætte dem op med hvad du gerne ville have som f.eks. med mellemrum eller komaer

    // Opgave 7 a 
    let mangoIndex = fruitsArray.indexOf("Mango");
    console.log("Opgave 7a", mangoIndex);

    // Opgave 7 b
    let blåbærIndex = fruitsArray.indexOf("Blåbær");
    console.log("Opgave 7b", blåbærIndex);
    //Jeg brugte indexOf da det finder det første element der passer og fortæller enten hvor det ligger eller -1 for hvis det ikke er der

    // Opgave 8
    dogsArray.indexOf("Polly")
    dogsArray.splice(3, 1);
    console.log("Opgave 8", dogsArray);
    //Jeg brugte splice da det kan fjerne eller ændre et element

}) // ends DOMContentLoaded