const country = new Country;
const search = document.querySelector('#search');
const
    country.getCountries()
    .then(data => {
        const ui = new UI(data.data)
        ui.display();
        console.log(data.data[1].name.common)

    })

search.addEventListener('input', e => {
    UI.searchDisplay(search)
    console.log(search)
})