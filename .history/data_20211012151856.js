class Country {

    getCountries = async function(country) {
        if (country != undefined || country != '') {
            url = `https://restcountries.com/v3.1/name/${country}`
        } else {
            let url = `https://restcountries.com/v3.1/all`

        }

        const response = await fetch(url);
        const data = await response.json();

        return {
            data
        }
    }
}