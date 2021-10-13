class Country {

    getCountries = async function(country) {
        let url = `https://restcountries.com/v3.1/name/${country}`;

        if (country == '') {
            url = 'https://restcountries.com/v3.1/all'
        }

        const region = region => {

        }

        const response = await fetch(url);
        const data = await response.json();

        return {
            data
        }
    }
}