class Country {
    const url = 'https://restcountries.com/v3.1/all';

    getCountries = async function() {
        const response = await fetch(url);
        const data = await response.json();

        return {
            data
        }
    }
}