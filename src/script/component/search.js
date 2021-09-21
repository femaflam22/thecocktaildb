class Search extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
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

            .search {
                max-width: 800px;
                border-radius: 5px;
                display: flex;
            }

            .search input {
                width: 83%;
                padding: 10px 16px;
                border: 0;
                border-bottom: 2px solid #F8485E;
                background: none;
            }

            .search input:focus {
                outline: 0;
                border-bottom: 2px solid #EFB7B7;
            }

            .search input:focus::placeholder {
                font-weight: bold;
            }

            .search input::placeholder {
                color: #BD1616;
                font-weight: normal;
            }

            .search button {
                width: 15%;
                cursor: pointer;
                margin-left: auto;
                padding: 10px;
                background-color: #F8485E;
                color: white;
                border: 0;
                text-transform: uppercase;
            }

            .search button:hover {
                background: #EFB7B7;
            }

            @media (max-width:740px) {
                .search input {
                    width: 75%;
                }
                .search button {
                    width: 20%;
                }
                .search input {
                    width: 70%;
                    padding: 10px 0;
                }
                .search button {
                    width: 25%;
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
                .search input {
                    width: 65%;
                }
                .search button {
                    width: 30%;
                }
            }
       </style>
       
        <div id="search" class="search">
            <input placeholder="search by name..." id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">search</button>
        </div>`;
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", Search);