let url = `https://restcountries.com/v3.1/all`
class Country {

    getCountries = async function(country) {
        if (country != undefined || )
            const response = await fetch(url);
        const data = await response.json();

        return {
            data
        }
    }
}