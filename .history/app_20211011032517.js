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
    // if (document.body.style.backgroundColor === 'hsl(0, 0%, 98%)') {
    //     console.log('black')
    // } else console.log('white')
})
console.log(document.body.style.backgroundColor === 'hsl(0, 0%, 98%)')