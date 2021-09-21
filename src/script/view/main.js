import '../component/search.js';
import '../component/data-list.js';
import '../component/favorite.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const dataListElement = document.querySelector("data-list");
    const favoriteElement = document.querySelector("favorite-section");

    const onButtonSearchClicked = () => {
        DataSource.searchData(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const favoriteDrink = () => {
        DataSource.favoriteData()
            .then(renderFavoriteResult)
            .catch(fallbackResult)
    };

    const renderFavoriteResult = results => {
        favoriteElement.drinks = results;
    };

    const renderResult = results => {
        dataListElement.drinks = results;
    };

    const fallbackResult = message => {
        alert('Data not found!');
    };

    searchElement.clickEvent = onButtonSearchClicked;
    favoriteDrink();
};

export default main;