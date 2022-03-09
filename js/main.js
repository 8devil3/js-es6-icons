const mainDiv = document.querySelector('main');




iconsArr.forEach(icon => {
    printIcons(icon.name, icon.prefix);
});

function printIcons(iconName, iconPrefix){
    let iconBox = document.createElement('div');
    iconBox.classList.add('icon-box');
    iconBox.innerHTML = `<i class="fa-solid ${iconPrefix}${iconName}"></i><p class="icon-name">${iconName}</p>`;
    mainDiv.appendChild(iconBox);
}
