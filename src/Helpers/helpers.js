function createElement(tag, className, text = '') {
    const el = document.createElement(tag);
    if (className) el.classList.add(className);
    if (text) el.textContent = text;
    return el;
}



export { createElement }