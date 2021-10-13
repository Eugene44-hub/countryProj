const country = new Country;
const search = document.querySelector('#search');
country.getCountries()
    .then(data => {
        const ui = new UI(data.data)
        ui.display();
        console.log(data.data[1].name.common)

    })

search.addEventListener('input', e => {
    UI.searchDisplay(search.value)
    console.log()
})