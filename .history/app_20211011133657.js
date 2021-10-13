const country = new Country;
const search = document.querySelector('#search');
const mode = document.querySelector('.mode');
const moon = document.querySelector('#moon');
const header = documen

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
        document.body.style.backgroundColor = 'hsl(207, 26%, 17%)'
        console.log(getComputedStyle(document.body).backgroundColor)

    } else {
        document.body.style.backgroundColor = 'rgb(250, 250, 250)';

        console.log(getComputedStyle(document.body).backgroundColor)
    }
})