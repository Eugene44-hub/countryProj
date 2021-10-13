class UI {
    constructor(country) {
        this.country = country;
    }

    display() {
        let countries = document.querySelector('.countries');
        let output = '';
        let zero = 0;
        for (let i = 0; i < this.country.length; i++) {
            output += `<p>${this.country[i].name.common}</p>`
        }
        countries.innerHTML = output
    }
}



/*  */