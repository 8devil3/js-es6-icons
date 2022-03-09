const main = document.querySelector("main");
const header = document.querySelector("header");
const selectIcon = document.querySelector("#select-icon");



uniqueType();
printAll();

//stampa di tutte le icone
function printAll() {
    iconsArr.forEach((icon) => {
        printIcons(icon.name, icon.prefix, icon.color);
    });
}


//click sul menu a tendina
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

    iconTypesUnique.push("all");
    iconTypesUnique.sort();

    //genero il menu a tendina HTML di type icon
    iconTypesUnique.forEach((element) => {
        selectTypeGen(element);
    });
}


//stampa icone nei div
function printIcons(iconName, iconPrefix, iconColor) {
    let iconBox = document.createElement("div");
    iconBox.classList.add("icon-box");
    iconBox.innerHTML = `<i class="fa-solid ${iconPrefix}${iconName}" style="color: ${iconColor}"></i><p class="icon-name">${iconName}</p>`;
    main.appendChild(iconBox);
}


//stampa menu a tendina delle icon type
function selectTypeGen(iconType) {
    let optIcon = document.createElement("option");

    optIcon.value = iconType;
    optIcon.innerText = iconType;
    selectIcon.appendChild(optIcon);
}
