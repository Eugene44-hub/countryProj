class UI {
    constructor(country) {
        this.country = country;
    }

    display() {
        const countries = document.querySelector('.countries');
        let output = '';
        for (let i = 0; i < this.country.length; i++) {
            output += `
            
            ${this.country[i].name.common}`
        }

    }
}