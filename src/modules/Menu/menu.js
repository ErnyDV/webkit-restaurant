import { createElement } from "../../Helpers/helpers";

function createMenuShape() {
    const menuContainer = createElement('div', 'menu-container');
    ['top-left', 'top-right', 'bottom-left', 'bottom-right'].forEach(className => {
        menuContainer.appendChild(createElement('div', className));
    });
    return menuContainer;
}

function createFoodOption(container, item) {
    const titleContainer = createElement('div', 'title-container');

    titleContainer.append(item.foodName, item.foodPrice);

    const itemContainer = createElement('div', 'item-container');
    itemContainer.append(titleContainer, item.foodDesc);

    container.appendChild(itemContainer);
}

function createMenu(container, type, menuOptions) {
    const menuContainer = createMenuShape();
    const menuTypeL = createElement('div', 'menu-type-left', type);
    const menuTypeR = createElement('div', 'menu-type-right', type);

    menuContainer.append(menuTypeL, menuTypeR)
    

    menuOptions.forEach(food => {
        const foodName = createElement('p', 'food-name', food.name);
        const foodPrice = createElement('p', 'food-price', food.price !== '' ? `${food.price}$` : `${food.price}`);
        const foodDesc = createElement('p', 'food-desc', food.desc);

        createFoodOption(menuContainer, { foodName, foodPrice, foodDesc });
    });

    container.appendChild(menuContainer);
}

export { createMenu };