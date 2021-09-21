class DataSearch extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set drink(drink) {
        this._drink = drink;
        this.render();
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
     
            h4 {
                text-transform: uppercase;
            }

            p {
                font-size: 0.7rem;
            }

            p.title {
                text-decoration: underline;
            }

            span {
                font-weight: bold;
            }

            .data-search {
                max-width: 450px;
                height: auto;
                box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
                background: #fff;
                margin-top: 25px;
                padding: 20px 30px;
            }

            .data-search .data-info {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                align-items: center;
                margin-bottom: 15px;
            }

            .data-search .data-desc{
                padding-top: 15px;
                font-size: 0.8rem;
            }

            .data-search .data-desc img {
                width: 160px;
                height: 160px;
                margin: 20px auto;
                display: block;
            }

            @media (max-width: 640px) {
                .data-search {
                    max-width: 100%;
                }
            }

            @media (max-width: 360px) {
                h3 {
                    font-size: 1rem;
                }
                p {
                    font-size: 0.7rem;
                }
            }

            @media (max-width: 335px) {
                h3 {
                    font-size: 0.8rem;
                }
            }
       </style>
       
        <div class="data-search">
            <div class="data-info">
                <h4>${this._drink.strDrink}</h4>
            </div>
            <hr>
            <div class="data-desc">
                <p>${this._drink.strInstructions}</p>
                <img src="${this._drink.strDrinkThumb}" alt="items">
            </div>
        </div>`;
    }
}

customElements.define("data-search", DataSearch);