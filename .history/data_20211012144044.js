class Country {

    getCountries = async function(country) {
        if (country != '' || country != undefined) {
            url = `https://restcountries.com/v3.1/name/${country}`
        } else {}
        const response = await fetch(url);
        const data = await response.json();

        return {
            data
        }
    }
}