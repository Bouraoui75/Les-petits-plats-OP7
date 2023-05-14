export default class Message {
    constructor(message, color, backgroundColor) {
        this.message = message;
        this.color = color;
        this.backgroundColor = backgroundColor;
    }

    view = () => {    
        const containerError = document.createElement('div');
        containerError.setAttribute('class', 'container-error');
    
        const errorMessage = document.createElement('h2');
        errorMessage.setAttribute('class', 'error-msg');
        errorMessage.style.color = this.color;
        errorMessage.style.backgroundColor = this.backgroundColor;
        errorMessage.innerText = this.message;
    
        containerError.appendChild(errorMessage);

        return containerError;
    }

    
}