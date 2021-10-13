class UI {
    constructor(country) {
        this.country = country;
    }

    display() {
        let countries = document.querySelector('.countries');
        let output = '';
        let zero = 0;
        for (let i = 0; i < this.country.length; i++) {
            output += ` 
            <div class="country">
            <div class="image">
           <img src=${this.country[i].flags.png}>
            </div>
            <div class="about-country">
            <p id=name>${this.country[i].name.common}</p>
                <p id="population">Population: ${this.country[i].name.common}</p>
                <p id="region">Region: ${this.country[i].population}</p>
               
            </div>
        </div>`
        }
        countries.innerHTML = output
    }
}



/*  */