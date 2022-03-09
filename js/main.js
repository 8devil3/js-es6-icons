const mainDiv = document.querySelector('main');




iconsArr.forEach(icon => {
    printIcons(icon.name, icon.prefix, icon.color);
});

function printIcons(iconName, iconPrefix, iconColor){
    let iconBox = document.createElement('div');
    iconBox.classList.add('icon-box');
    iconBox.innerHTML = `<i class="fa-solid ${iconPrefix}${iconName}" style="color: ${iconColor}"></i><p class="icon-name">${iconName}</p>`;
    mainDiv.appendChild(iconBox);
}
