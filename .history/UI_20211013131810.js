const search = document.querySelector('#search');
const moon = document.querySelector('#moon');
const header = document.querySelector('.header-container');
const select = document.querySelector('.select');
const regions = document.querySelector('ul');
const countt = document.querySelector('.country');
console.log(countt)
class UI {
    constructor(country) {
        this.country = country;
    }

    display() {
        let countries = document.querySelector('.countries');
        let output = '';


        for (let i = 0; i < this.country.length; i++) {

            if (this.country[i].capital === undefined) {
                output += ` 
              <div class="country">
              <div class="image">
             <img src=${this.country[i].flags.png}>
              </div>
              <div class="about-country">
              <p id=name>${this.country[i].name.common}</p>
              <p id="population">Population: ${this.country[i].population}</p>
                  <p id="region">Region: ${this.country[i].region}</p>
                  <p id="capital">Capital: No capital</p>
              </div>
          </div>`

            } else {
                output += ` 
              <div class="country">
              <div class="image">
             <img src=${this.country[i].flags.png}>
              </div>
              <div class="about-country">
              <p id=name>${this.country[i].name.common}</p>
                  <p id="population"><span>Population</span>: ${this.country[i].population}</p>

                  <p id="region"><span>Region</span>: ${this.country[i].region}</p>

                  <p id="capital"><span>Capital</span>: ${this.country[i].capital[0]}</p>
              </div>
          </div>`;


            };

        }

        countries.innerHTML = output
        console.log()
        const countryInfo = countries.children;

        if (getComputedStyle(document.body).backgroundColor === 'rgb(250, 250, 250)') {
            for (let i = 0; i < countryInfo.length; i++) {
                countryInfo[i].style.boxShadow = '2px 4px 15px rgb(235, 235, 235), -2px -0px 15px rgb(235, 235, 235)';
            }
        } else {
            for (let i = 0; i < countryInfo.length; i++) {
                countryInfo[i].style.boxShadow = '2px 4px 15px rgb(29, 29, 29), -2px -0px 5px hsl(209, 23%, 22%)';
            }
        }

    }
    static searchDisplay(input) {
        if (input.value !== '') {
            input.style.backgroundImage = 'none';
        } else {
            input.style.backgroundImage = `url('search\ icon.png')`;
        }
    }
    static theme() {
        const countryInfo = document.querySelectorAll('.country');

        if (getComputedStyle(document.body).backgroundColor === 'rgb(250, 250, 250)') {
            for (let i = 0; i < countryInfo.length; i++) {
                countryInfo[i].style.boxShadow = '2px 4px 15px rgb(29, 29, 29), -2px -0px 5px hsl(209, 23%, 22%)';
                //  hsl(207, 26%, 17%)
            }
            document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
            header.style.backgroundColor = 'hsl(209, 23%, 22%)';
            header.style.borderBottom = 'none';
            document.body.style.color = 'white';
            moon.style.color = 'white'
            search.style.backgroundColor = 'hsl(209, 23%, 22%)';
            select.style.backgroundColor = 'hsl(209, 23%, 22%)';
            regions.style.backgroundColor = 'hsl(209, 23%, 22%)';
            select.style.color = 'white';
            search.style.color = 'white';
            search.style.boxShadow = '2px 4px 15px rgb(29, 29, 29), -2px -0px 5px hsl(209, 23%, 22%)';
            select.style.boxShadow = '2px 4px 15px rgb(29, 29, 29), -2px -0px 5px hsl(209, 23%, 22%)';
            regions.style.boxShadow = '2px 4px 15px rgb(29, 29, 29), -2px -0px 5px hsl(209, 23%, 22%)';

        } else {
            for (let i = 0; i < countryInfo.length; i++) {
                countryInfo[i].style.boxShadow = '2px 4px 15px rgb(235, 235, 235), -2px -0px 15px rgb(235, 235, 235)';
            }
            document.body.style['background-color'] = 'rgb(250, 250, 250)';
            header.style.backgroundColor = 'white';
            header.style.borderBottom = '1px solid rgb(230, 226, 226)';
            document.body.style.color = 'black';
            moon.style.color = 'black';
            search.style.color = 'black'
            search.style.backgroundColor = 'white';
            regions.style.backgroundColor = 'white';
            select.style.backgroundColor = 'white';
            select.style['color'] = 'black';
            search.style.boxShadow = '2px 2px 10px rgb(235, 233, 233)';
            select.style.boxShadow = '0px 1px 10px rgb(235, 233, 233)';
            regions.style.boxShadow = '0px 1px 10px rgb(235, 233, 233)';





            console.log(getComputedStyle(document.body).backgroundColor)
        }
    }

    errorMessage() {
        coun
    }
}
console.log(getComputedStyle(document.body).backgroundColor)

console.log(getComputedStyle(document.body).backgroundColor)