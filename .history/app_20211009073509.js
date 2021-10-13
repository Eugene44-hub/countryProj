const country = new Country;

country.getCountries()
    .then(data => {
        const ui = new UI(data)
        console.log(data)
    })