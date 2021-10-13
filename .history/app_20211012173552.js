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
            const countryInfo = document.querySelectorAll('.country');
            console.log(countryInfo)

            if (getComputedStyle(document.body).backgroundColor === 'rgb(250, 250, 250)') {
                for (let i = 0; i < countryInfo.length; i++) {
                    console.log(countryInfo[i])

                }
            } else {
                for (let i = 0; i < countryInfo.length; i++) {

                    //  hsl(207, 26%, 17%)
                    console.log(countryInfo[i])
                }
            }

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

getComputedStyle(document.body).backgroundColor