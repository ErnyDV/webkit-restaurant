import triangleLeftSVG from './triangle-left.svg'
import triangleRightSVG from './triangle-right.svg'
import { createElement } from '../../Helpers/helpers';


function createTriangles(header, position){
    const triangle = createElement('img', `triangle-${position}`)

    triangle.src = position === 'left' ? triangleLeftSVG : triangleRightSVG;
    

    triangle.style = `${position}: -${position === 'left' ? 148: 140}px`
    triangle.style.top = `60%`
    triangle.style.transform = `translateY(-50%)`

    
    header.appendChild(triangle)
}


function createContainerHeader(container, name){
    const menuHeaderContainer = createElement('div', 'container-header', name)

    createTriangles(menuHeaderContainer, 'left')
    createTriangles(menuHeaderContainer, 'right')

    container.appendChild(menuHeaderContainer);
}



export {createContainerHeader}