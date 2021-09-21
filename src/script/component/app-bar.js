class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            header {
                width: 100%;
                height: auto;
                padding: 20px 50px;
                background: #fff;
                display: flex;
                align-items: center;
            }

            @media (max-width: 640px) {
                header {
                    padding: 20px 30px;
                }
            }
       </style>
       
        <header>
            <h3>The Cocktail</h3>
        </header>`;
    }
}

customElements.define("app-bar", AppBar);