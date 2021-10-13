class Country {

    getCountries = async function(country) {
        leturl = `https://restcountries.com/v3.1/name/${country}`

        const response = await fetch(url);
        const data = await response.json();

        return {
            data
        }
    }
}