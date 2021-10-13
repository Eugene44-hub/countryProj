const country = new Country;
const mode = document.querySelector('.mode');


country.getCountries()
    .then(data => {
        const ui = new UI(data.data)
        ui.display();
        console.log(data.data[1].name.common)

        console.log(data)
        mode.addEventListener('click', e => {
            ui.theme()
        })



    })

search.addEventListener('input', e => {
    country.getCountries(e.target.value)
        .then(data => {
            const ui = new UI(data.data)
                // ui.display();
            console.log(data.data.name)


            mode.addEventListener('click', e => {
                ui.theme()
            })

        })
})

search.addEventListener('focus', e => {
    if (search.value == "Search for a country...")
        search.value = ''
})