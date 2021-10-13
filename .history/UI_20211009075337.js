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
                <p id="population">popula</p>
                <p id="region"></p>
                <p id="capital"></p>
            </div>
        </div>
            ${this.country[i].name.common}`
        }

    }
}