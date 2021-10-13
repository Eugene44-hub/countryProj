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
          </div>`
            };

        }

        countries.innerHTML = output
    }
    static searchDisplay(input) {
        if (input.value !== '') {
            input.style.backgroundImage = 'none';
        } else {
            input.style.backgroundImage = `url('search\ icon.png')`;
        }
    }
    theme() {
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
            search.style.boxShadow = '2px 4px 15px rgb(29, 29, 29), -2px -0px 5px hsl(209, 23%, 22%)';
            select.style.boxShadow = '2px 4px 15px rgb(29, 29, 29), -2px -0px 5px hsl(209, 23%, 22%)';
            for (let i = 0; i < countryInfo.length; i++) {
                countryInfo[i].style.boxShadow = '2px 4px 15px rgb(29, 29, 29), -2px -0px 5px hsl(209, 23%, 22%)';
                //  hsl(207, 26%, 17%)
            }
        }
    }



    /*  */