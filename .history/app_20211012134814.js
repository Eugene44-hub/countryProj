const country = new Country;
const mode = document.querySelector('.mode');


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

search.addEventListener('focus', e => {
    if (search.value == "Search for a country...")
        search.value = ''
})