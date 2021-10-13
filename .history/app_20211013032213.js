const country = new Country;
const mode = document.querySelector('.mode');


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

            if (getComputedStyle(document.body).backgroundColor === 'rgb(250, 250, 250)') {
                for (let i = 0; i < countryInfo.length; i++) {
                    countryInfo[i].style['box-shadow'] = 'none';
                    countryInfo[i].style['color'] = 'green';
                    console.log(countryInfo[i])
                }
            } else {
                for (let i = 0; i < countryInfo.length; i++) {
                    countryInfo[i].style.boxShadow = 'none';
                    countryInfo[i].style['color'] = 'green';
                    console.log(countryInfo)
                        //  hsl(207, 26%, 17%)
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