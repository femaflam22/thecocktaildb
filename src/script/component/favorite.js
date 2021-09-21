class Favorite extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set drinks(drinks) {
        this._drinks = drinks;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._drinks.forEach(drink => {
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
                section.right-content {
                    height: auto;
                    background: #fff;
                    padding: 20px 30px;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
                    margin-left: 35px;
                }

                section.right-content .first-item {
                    display: flex;
                    align-items: center;
                    padding-bottom: 15px;
                }

                section.right-content .first-item img {
                    width: 50px;
                    height: 50px;
                    margin-right: 10px;
                }

                section.right-content .first-item .title h4 {
                    font-size: 1.2rem;
                }

                section.right-content .second-item {
                    padding-top: 15px;
                }

                section.right-content .second-item .desc {
                    margin: 10px 0 15px 0;
                }

                section.right-content .third-item {
                    margin: 15px 0 15px 0;
                }

                section.right-content .third-item .title {
                    margin-bottom: 15px;
                }

                section.right-content .last-item {
                    margin-top: 15px;
                }

                section.right-content .last-item p a {
                    color: #7186e6;
                }

                @media (max-width: 640px) {
                    section.right-content {
                        margin-top: 25px;
                        margin-left: 0;
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
        
            <section class="right-content">
                <div class="first-item">
                    <img src="${drink.strDrinkThumb}" alt="favorite">
                    <div class="title">
                        <p>Favorite</p>
                        <h4>${drink.strDrink}</h4>
                    </div>
                </div>
                <hr>
                <div class="second-item">
                    <div class="desc">
                        <p>${drink.strInstructions}</p>
                    </div>
                </div>
                <hr>
                <div class="third-item">
                    <p class="title">Ingredients</p>
                    <p>${drink.strIngredient1}, ${drink.strIngredient2}, ${drink.strIngredient3}, ${drink.strIngredient4}, ${drink.strIngredient5}</p>
                </div>
                <hr>
                <div class="last-item">
                    <p>API: <a href="https://www.thecocktaildb.com/api.php" target="_blank">thecocktaildb</a>, Icon: <a target="_blank" href="https://www.flaticon.com/">FlatIcon</a></p>
                </div>
            </section>`;
        })
    }
}

customElements.define("favorite-section", Favorite);