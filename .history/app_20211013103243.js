const country = new Country;
const mode = document.querySelector('.mode');
const region = document.querySelector('')


country.getCountries('')
    .then(data => {
        console.log(data)

        const ui = new UI(data.data)
        ui.display();
        console.log(data.data[1].name.common)
    })

search.addEventListener('keyup', e => {
    country.getCountries(e.target.value)
        .then(data => {
            // console.log(e.target.value)
            const countryInfo = document.querySelectorAll('.country');
            // console.log(countryInfo)
            const ui = new UI(data.data)
            ui.display();
            // console.log(data.data)

        })
})

search.addEventListener('focus', e => {
    if (search.value == search.value)
        search.value = ''
})
mode.addEventListener('click', e => {
    UI.theme()
})

region.addEventListener('click', e => {

})