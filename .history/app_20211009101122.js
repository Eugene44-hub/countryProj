const country = new Country;

country.getCountries()
    .then(data => {
        const ui = new UI(data.data)
        ui.display();
        console.log(data.data[3].capital)

    })