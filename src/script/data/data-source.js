class DataSource {
    static searchData = async(keyword) => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`);
            const responseJson = await response.json();
            if (responseJson.drinks) {
                return responseJson.drinks;
            } else {
                return `${keyword} is not found`;
            }
        } catch (error) {
            alert(error);
        }
    };

    static favoriteData = async() => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13196`);
            const responseJson = await response.json();
            if (responseJson.drinks) {
                return responseJson.drinks;
            } else {
                return `${keyword} is not found`;
            }
        } catch (error) {
            alert(error);
        }
    }
}

export default DataSource;