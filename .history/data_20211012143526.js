class Country {

    getCountries = async function(country) {
        const url = `https://restcountries.com/v3.1/${country}`;
        if (country != '' || country != undef) {

        }
        const response = await fetch(url);
        const data = await response.json();

        return {
            data
        }
    }
}