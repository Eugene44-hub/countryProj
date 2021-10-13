const country = new Country;
const mode = document.querySelector('.mode');


country.getCountries()
    .then(data => {
        const ui = new UI(data.data)
        ui.display();
        console.log(data.data[1].name.common)


        mode.addEventListener('click', e => {
            ui.theme()
        })

        search.addEventListener('input', e => {
            if
        })

    })



search.addEventListener('focus', e => {
    if (search.value == "Search for a country...")
        search.value = ''
})