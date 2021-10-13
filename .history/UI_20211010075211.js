class UI {
    constructor(country) {
        this.country = country;
    }

    display() {
        let countries = document.querySelector('.countries');
        let output = '';
        let zero = 0;
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
            }
        }
        countries.innerHTML = output
    }
    searchDisplay(input) {
        if (input !== '') {
            icon.style.backgroundImage = 'none';
        } else {
            icon.style.backgroundImage = url('search\ icon.png');
        }
    }
}



/*  */