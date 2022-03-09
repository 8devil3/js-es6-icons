const main = document.querySelector("main");
const header = document.querySelector("header");
const selectIcon = document.querySelector("#select-icon");




uniqueType(); //genero il menu a tendina
printAll(); //stampo le icone


//stampa di tutte le icone
function printAll() {
    iconsArr.forEach((icon) => {
        printIcons(icon.name, icon.prefix, icon.color);
    });
}


//filtro sul menu a tendina
selectIcon.addEventListener("change", () => {
    //reset risultati
    let iconsSelected = [];
    main.innerHTML = "";

    if (selectIcon.value == "all") {
        printAll();
    } else {
        //filtro i risultati in base alla scelta dell'utente
        iconsSelected = iconsArr.filter((element) => {
            return element.type == selectIcon.value;
        });

        //genero le icone nei loro div
        iconsSelected.forEach((icon) => {
            printIcons(icon.name, icon.prefix, icon.color);
        });
    }
});


//generazione array con i type icon univoci
function uniqueType() {
    iconTypesUnique = iconsArr
        .map((icon) => {
            return icon.type;
        })
        .filter((element, index, array) => {
            return array.indexOf(element) == index;
        });
    
    //aggiungo la voce 'all' al menu a tendina
    iconTypesUnique.push("all");

    //ordino alfabeticamente le voci di menu
    iconTypesUnique.sort();

    //genero il menu a tendina HTML di type icon
    iconTypesUnique.forEach((element) => {
        selectTypeGen(element);
    });
}


//stampa icone nei div
function printIcons(iconName, iconPrefix) {
    let iconBox = document.createElement("div");
    iconBox.classList.add("icon-box");
    iconBox.innerHTML = `<i class="fa-solid ${iconPrefix}${iconName}" style="color: #${rndmColor()}"></i><p class="icon-name">${iconName}</p>`;
    main.appendChild(iconBox);
}


//stampa menu a tendina delle icon type
function selectTypeGen(iconType) {
    let optIcon = document.createElement("option");

    optIcon.value = iconType;
    optIcon.innerText = iconType;
    selectIcon.appendChild(optIcon);
}


//generazione colore casuale
function rndmColor() {
    colorHexArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    newColor = [];
    
    for (let c = 0; c < 6; c++) {
        let digit = colorHexArr[Math.floor(Math.random() * colorHexArr.length)];
        newColor.push(digit);
    }

    return newColor.join('');
}


