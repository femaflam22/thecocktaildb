import './data-search.js';

class DataList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set drinks(drinks) {
        this._drinks = drinks;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._drinks.forEach(drink => {
            const drinkItemElement = document.createElement("data-search");
            drinkItemElement.drink = drink
            this.shadowDOM.appendChild(drinkItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
       <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
       `;
    }
}

customElements.define("data-list", DataList);