/**
 * Add an element at the end of another element
 * @param {HTMLElement} element 
 * @param {HTMLElement} target 
 */
const append = (element, target) => {
    target.appendChild(element);
}

/**
 * Remplace an element by another element
 * @param {HTMLElement} element 
 * @param {HTMLElement} target 
 */
const replace = (element, target) => {
    target.parentNode.replaceChild(element, target);
}

/**
 * Add an element before another element
 * @param {HTMLElement} element 
 * @param {HTMLElement} target 
 */
const insertBefore = (element, target) => {
    target.parentNode.insertBefore(element, target);
}

/**
 * Add an element after another element
 * @param {HTMLElement} element 
 * @param {HTMLElement} target 
 */
const insertAfter = (element, target) => {
    target.after(element);
}

/**
 * Delete an element from the dom
 * @param {HTMLElement} element
 */
const remove = (element) => {
    element.parentNode.removeChild(element);
}

const dom = {
    append,
    replace,
    insertBefore,
    insertAfter,
    remove
}

export default dom;
