class Country {

    getCountries = async function(country) {
        let url = `https://restcountries.com/v3.1/${country}`;
        if (country != '' || country != undefined) {
            url = `https://restcountries.com/v3.1/${country}`
        }
        const response = await fetch(url);
        const data = await response.json();

        return {
            data
        }
    }
}