const country = new Country;
const search = document.querySelector('#search');
const mode = document.querySelector('.mode');
const moon = document.querySelector('#moon');
const header = document.querySelector('.header-container');
const select = document.querySelector('.select');

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
    const countryInfo = document.querySelectorAll('.country');

    if (getComputedStyle(document.body).backgroundColor === 'rgb(250, 250, 250)') {
        document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
        header.style.backgroundColor = 'hsl(209, 23%, 22%)';
        header.style.borderBottom = 'none';
        document.body.style.color = 'white';
        moon.style.color = 'white'
        search.style.backgroundColor = 'hsl(209, 23%, 22%)';
        select.style.backgroundColor = 'hsl(209, 23%, 22%)';
        select.style.color = 'white';
        search.style.color = 'white';
        search.style.boxShadow = '2px 2px 10px hsl(209, 23%, 22%)';
        select.style.boxShadow = '0px 1px 10px hsl(209, 23%, 22%)';
        for (let i = 0; i < countryInfo.length; i++) {
            countryInfo[i].style.boxShadow = 2 px 2 px 15 px rgb(235, 235, 235), -2 px 0 px 15 px rgb(235, 235, 235)
                //  hsl(207, 26%, 17%)
        }



        console.log(getComputedStyle(document.body).backgroundColor)

    } else {

        document.body.style['background-color'] = 'rgb(250, 250, 250)';
        header.style.backgroundColor = 'white';
        header.style.borderBottom = '1px solid rgb(230, 226, 226)';
        document.body.style.color = 'black';
        moon.style.color = 'black';
        search.style.color = 'black'
        search.style.backgroundColor = 'white';
        select.style.backgroundColor = 'white';
        select.style['color'] = 'black';
        search.style.boxShadow = '2px 2px 10px rgb(235, 233, 233)';
        select.style.boxShadow = '0px 1px 10px rgb(235, 233, 233)';
        for (let i = 0; i < countryInfo.length; i++) {
            countryInfo[i].style.boxShadow = '2px 2px 15px rgb(235, 235, 235), -2px 0px 15px rgb(235, 235, 235)';
        }


        console.log(countryInfo)


        console.log(getComputedStyle(document.body).backgroundColor)
    }
})
search.addEventListener('focus', e => {
    if (search.value == "Search for a country...")
        search.value = ''
})