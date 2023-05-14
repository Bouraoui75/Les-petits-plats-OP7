import FilterDropdown from "./FilterDropdown.js";
import DOM from "../modules/dom.js";
import TagFactory from "./TagFactory.js";
import Dropdown from "./FilterDropdown.js";

export default class FilterDropdownFactory {
    static createFilterDropdown = (tags) => {
        /* We take the tags object loop into it and remove the 's'
        at the end to get the final label and create the dropdown */
        for (const [key, value] of Object.entries(tags)) {
            new FilterDropdown(key, value);
        }
    }

    static createDropdowns() {
        TagFactory.createTags();

        Dropdown.instances.forEach(dropdown => {
            DOM.append(dropdown.element, document.getElementById('filters-dropdown'));
        });
    }
}
