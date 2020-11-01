import './styles.css';
import API from './js/fetchCountries';
import getRefs from './js/get-refs';
import debounce from 'lodash.debounce';


const refs = getRefs();
const resultsListTpl = require('./templates/search-results-list.handlebars');

refs.inputField.addEventListener('input', debounce(onSearch, 500),);

function onSearch(e) {
    const searchQuery = e.target.value;
    
    if(searchQuery !== '') {API.fetchCountriesByName(searchQuery).then(validator);}

}

function validator (searchResult) {
    if (searchResult.length > 10) {
    console.log('too many options');
    } else if (searchResult.length < 10 && searchResult.length > 1) {
        console.log('Ok, lets parse some options');
        console.log(searchResult);
        makeCountriesList(searchResult);
    } else {
        console.log('Ok, one option, parse the country sheet')}
}

function makeCountriesList(searchResult) {
    console.log(searchResult);
    const markup = resultsListTpl(searchResult);
    console.log(markup);
    
}
