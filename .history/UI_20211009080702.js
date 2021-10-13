class UI {
    constructor(country) {
        this.country = country;
    }

    display() {
        const countries = document.querySelector('.countries');
        let output = '';
        for (let i = 0; i < this.country.length; i++) {
            output += `
            <div class="country">
            <div class="image">
           <img src=${this.country[i].name.common}  >
            </div>
            <div class="about-country">
            <p id=name>${this.country[i].name.common}</p>
                <p id="population">Population: ${this.country[i].name.common}</p>
                <p id="region">Region: ${this.country[i].name.common}</p>
                <p id="capital">Capital:</p>
            </div>
        </div>
            `
        }

    }
}