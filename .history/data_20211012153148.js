class Country {

    getCountries = async function(country) {
        let url = `https://restcountries.com/v3.1/all`;



        const response = await fetch(url);
        const data = await response.json();

        return {
            data
        }
    }
}