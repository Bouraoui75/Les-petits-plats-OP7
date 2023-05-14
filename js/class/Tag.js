import DOM from '../modules/dom.js';
import Recipe from './Recipe.js';
import search from '../modules/search.js';

export default class Tag {
    constructor(type, name) {
        this.type = type;
        this.name = name.toLowerCase();
    
        Tag.instances = [...Tag.instances, this];
    }

    static instances = [];
    static active = [];

    /**
     * Create the view of a tag who'll be displayed in the active filters section
     * @returns {HTMLElement}
     */
    tag = () => {

        // If the tag is already active, we don't create it
        if (this.tagResult) {
            return this.tagResult;
        }

        let element = document.createElement('li');
        element.setAttribute('class', `tag tag-${this.type}`);

        let deleteBtn = document.createElement('i');
        deleteBtn.setAttribute('class', 'far fa-times-circle tag__icon');
        deleteBtn.addEventListener('click', this.delete)

        element.innerText = this.name;
        element.appendChild(deleteBtn);

        this.tagResult = element;
        return element;
    }

    /**
     * Create the view of a tag in the dropdown list
     * @returns {HTMLElement}
     */
    listElement = () => {

        // If the tag inside the list is already created, we return it
        if (this.listElementResult) {
            return this.listElementResult;
        }

        let element = document.createElement('li');
        element.setAttribute('data-value', this.name);
        element.setAttribute('title', this.name);
        element.innerText = this.name;

        element.addEventListener('click', this.add);

        this.listElementResult = element;
        return element;
    }

    /**
     * Add the tag to the active tags and display it
     */
    add = () => {
        Tag.active = [...Tag.active, this];
        DOM.append(this.tag(), document.getElementById('tags-list'));
        search(Tag.active, Recipe.instances);
        this.listElementResult.classList.add('already-selected');
    }

    /**
     * Delete the tag from the active tags and remove it
     */
    delete = () => {
        let newActiveTags = Tag.active.filter(tag => tag !== this);
        Tag.active = newActiveTags;
        DOM.remove(this.tag());
        search(Tag.active, Recipe.instances);
        this.listElementResult.classList.remove('already-selected');
    }
}