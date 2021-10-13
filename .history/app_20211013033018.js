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
            const all = '';
            // console.log(countryInfo)

            if (getComputedStyle(document.body).backgroundColor === 'rgb(250, 250, 250)') {
                for (let i = 0; i < countryInfo.length; i++) {
                    countryInfo[i].style['box-shadow'] = '2px 4px 15px rgb(235, 235, 235), -2px 0px 15px rgb(235, 235, 235)';

                }
            } else {
                for (let i = 0; i < countryInfo.length; i++) {
                    countryInfo[i].style.boxShadow = '2px 4px 15px rgb(29, 29, 29), -2px -0px 5px hsl(209, 23%, 22%)';
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