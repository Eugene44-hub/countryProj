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
                <img src="" alt="">
            </div>
            <div class="about-country">
            <p id=name></p>
                <p id="population">Population:</p>
                <p id="region">Region:</p>
                <p id="capital">Capital:</p>
            </div>
        </div>
            `
        }

    }
}