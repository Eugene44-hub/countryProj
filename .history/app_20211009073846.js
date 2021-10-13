const country = new Country;

country.getCountries()
    .then(data => {
        const ui = new UI(data.data)
        console.log(data.data)

    })