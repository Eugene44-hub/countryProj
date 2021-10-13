class UI {
    constructor(country) {
        this.country = country;
    }

    display() {
        const countries = document.querySelector('.country');
        let output = '';
        for (let i = 0; i < this.country.length; i++) {
            output += `${this.country[i].name.common}`
        }
        console.log(output)
    }
}