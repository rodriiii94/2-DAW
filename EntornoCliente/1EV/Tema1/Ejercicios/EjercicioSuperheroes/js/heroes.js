var header = document.querySelector("header");
var section = document.querySelector("section");

//var requestURL =
//  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

var requestURL = "/json/heroes.json";

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

function populateHeader(jsonObj) {
  const myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + jsonObj["homeTown"] + " // Formed: " + jsonObj["formed"];
  header.appendChild(myPara);
}

// Function to display the heroes' information
function showHeroes(jsonObj) {
    // Get the array of heroes from the JSON object
    const heroes = jsonObj["members"];

    // Loop through each hero in the array
    for (let i = 0; i < heroes.length; i++) {
        // Create elements for each hero's information
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myPara3 = document.createElement("p");
        const myList = document.createElement("ul");

        // Set the text content for each element
        myH2.textContent = heroes[i].name;
        myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
        myPara2.textContent = "Age: " + heroes[i].age;
        myPara3.textContent = "Superpowers:";

        // Get the array of superpowers for the current hero
        const superPowers = heroes[i].powers;
        // Loop through each superpower and create a list item for it
        for (let j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement("li");
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        // Append each element to the article element
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        // Append the article element to the section element
        section.appendChild(myArticle);
    }
}
