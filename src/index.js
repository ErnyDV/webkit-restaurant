import './style/style.css'
import './modules/Menu/menu.css'
import './modules/ContainerHeader/containerHeader.css'
import * as menu from './modules/Menu/menu.js'
import {createContainerHeader} from './modules/ContainerHeader/containerHeader.js'

//Create main container
const content = document.querySelector('#content');
const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
content.appendChild(mainContainer);

window.menuOnClick = function(){
    mainContainer.innerHTML = ''
    createContainerHeader(mainContainer,'Menu')
    menu.createMenu(mainContainer,'Beverages', [
        {name: 'Horchata', price: '10.99', desc: 'A cool, creamy traditional Mexican beverage made by soaking rice with cinnamon and sweet vanilla, '}, 
        {name: 'Jamaica', price: '8.50', desc:'A chilled hibiscus infusion sweetened with cane sugar and bright lime, offering tart‑fruity refreshment in every sip.'}
    ])

    menu.createMenu(mainContainer, 'Appetizers', [
        {name: 'Elote Cups', price: '12.99', desc: 'Roasted corn tossed in lime crema, cotija, chili powder, and fresh cilantro for a zesty, crunchy starter.'},
        {name: 'Ceviche Tostadas', price: '15.00', desc: 'Marinated shrimp and pico de gallo on crisp tortilla shells, finished with avocado slices and a hint of jalapeño.'},

    ])

    menu.createMenu(mainContainer, 'Main Dishes', [
        {name: 'Tacos al Pastor', price: '15.00', desc: 'Slow-roasted achiote-marinated pork topped with grilled pineapple, onion, and cilantro on warm corn tortillas, served with a side of tangy salsa verde.'},
        {name: 'Mole Verde Chicken', price: '18.00', desc: 'Tender chicken simmered in a vibrant pumpkin-seed and tomatillo mole, garnished with queso fresco and fresh radish slices.'},

    ])
}

window.homeOnClick = function(){
    mainContainer.innerHTML = ''
    createContainerHeader(mainContainer,'Home')
        menu.createMenu(mainContainer,`Ernys Taqueria`, [
        {name: 'Looking for the best tacos in town?', price: '', desc: 'Welcome to Taquería El Fuego, where every bite is a celebration of authentic Mexican flavor!'}, 
        {name: 'Hours', price: '', desc:`
            ============== Sunday: 8am - 8pm ===============  
            =============== Monday: 6am - 6pm =============== 
            =============== Tuesday: 6am - 6pm =============== 
            ============== Wednesday: 6am - 6pm ============== 
            ============== Thursday: 6am - 10pm ============== 
            ============== Friday: 6am - 10pm ============== 
            ============== Saturday: 8am - 10pm ==============`
        },
        {name: 'Location', price: '', desc: '123 Forest Drive, Forestville, Maine'}, 

    ])
}


window.contactOnClick = function(){
    mainContainer.innerHTML = ''
    createContainerHeader(mainContainer,'Contact Us')
        menu.createMenu(mainContainer,`Contact Us`, [
        {name: 'Chef', price: '', desc: 'Number: 555-555-5554 Email: totallyRealEmail@notFake.com'}, 
        {name: 'Manager', price: '', desc:'Number: 555-555-5555 Email: perfectlyRealEmail@notFake.com'},
    ])
}



window.homeOnClick()