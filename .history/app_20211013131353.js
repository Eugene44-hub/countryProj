const country = new Country;
const mode = document.querySelector('.mode');
const region = document.querySelector('.search-filter')


country.getCountries('')
    .then(data => {
        // console.log(data)
        const ui = new UI(data.data)
        ui.display();
        console.log(data.data[1].name.common)
    })

search.addEventListener('keyup', e => {
    country.getCountries(e.target.value)
        .then(data => {
            const ui = new UI(data.data)

            if (data.data.message) {
                ui.errorMessage()
                    // console.log(data.data.message)
            } else {
                // console.log(e.target.value)
                const countryInfo = document.querySelectorAll('.country');
                // console.log(countryInfo)

                ui.display();
                console.log(data.data)
            }

        })
})

search.addEventListener('focus', e => {
    if (search.value == search.value)
        search.value = ''
});
mode.addEventListener('click', e => {
    UI.theme()
})

region.addEventListener('click', e => {
    if (e.target.className == 'region') {
        country.getRegion(e.target.textContent)
            .then(data => {

                const ui = new UI(data.data)
                ui.display();
            })
            // console.log(e.target.textContent)
            // const ui = new UI(data.data)
            // ui.display();
    }
})