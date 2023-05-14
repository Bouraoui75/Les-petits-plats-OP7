import DOM from "../modules/dom.js";
import Message from "./Message.js";

export default class MessageFactory {   
    
    static display = (item, target) => {
        DOM.append(item.view(), target);
    }

    static createError = (message, target) => {
        const item = new Message(message, '#FFFF', '#ED6454');
        this.display(item, target);
    }

    static createSuccess = (message, target) => {
        const item = new Message(message, '#FFFF', '#68D9A4');
        this.display(item, target);
    }

    static createWarning = (message, target) => {
        const item = new Message(message, '#FFFF', '#edc213');
        this.display(item, target);
    }
}
