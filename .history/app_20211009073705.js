const country = new Country;

country.getCountries()
    .then(data => {
        const ui = new UI(data)
        console.log(data.data)
        for (let i = 0; i < data.data.length;)
    })