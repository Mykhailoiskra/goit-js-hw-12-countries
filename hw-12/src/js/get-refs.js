export default function getRefs() {
    return {
        inputField: document.querySelector('.country-search__input'),
        resultsList: document.querySelector('.search-results'),
        countryProfile: document.querySelector('country-card')
    }
}