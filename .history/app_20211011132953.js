const country = new Country;
const search = document.querySelector('#search');
const mode = document.querySelector('.mode');
const moon = document.querySelector('#moon');
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

mode.addEventListener('click', e => {
    if (getComputedStyle(document.body).backgroundColor === 'rgb(250, 250, 250)') {
        getComputedStyle(document.body).backgroundColor === 'rgb(250, 250, 250)'
    } else console.log('white')
})