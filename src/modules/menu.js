const content = document.querySelector('#content')

const mainContainer = document.createElement('div')
mainContainer.classList.add('menu-container')

function createMenu(menuOptions){
    content.appendChild(mainContainer)
}


export {createMenu}