const country = new Country;
const searc
country.getCountries()
    .then(data => {
        const ui = new UI(data.data)
        ui.display();
        console.log(data.data[1].name.common)

    })