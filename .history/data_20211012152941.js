class Country {

    getCountries = async function(country) {
        let url = `https://restcountries.com/v3.1/all`;
        if (country == "Search for a country...") {
            url = `https://restcountries.com/v3.1/all`
        }
        if (country != '' || country != '') {
            url = `https://restcountries.com/v3.1/name/${country}`
        } else {
            url = `https://restcountries.com/v3.1/all`
        }

        const response = await fetch(url);
        const data = await response.json();

        return {
            data
        }
    }
}