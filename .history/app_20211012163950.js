const country = new Country;
const mode = document.querySelector('.mode');


country.getCountries('')
    .then(data => {
        console.log(data)

        const ui = new UI(data.data)
        ui.display();
        console.log(data.data[1].name.common)
    })

search.addEventListener('input', e => {
    country.getCountries(e.target.value)
        .then(data => {
            console.log(e.target.value)

            const ui = new UI(data.data)
            ui.display();
            console.log(data.data)
        })
})

search.addEventListener('focus', e => {
    if (search.value == search.value)
        search.value = ''
})
mode.addEventListener('click', e => {
    UI.theme()
})

console.log(document.body.getComputedStyle)