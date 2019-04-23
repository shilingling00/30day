const url =  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities=[];
//通过fetch来获取后台数据，并进行json化以及请求异常处理。
const search = document.querySelector(".searchform");
const suggestions = document.querySelector(".list");
fetch(url)
    .then(blob => blob.json())
    .then(places => cities.push(...places));


const displayResults = (places, regex, term) => {


    let html;

    if (term === '') {
        html = `<li>Filter by a city</li>
            <li>or a state</li>`;
    } else {

        html = places.map((place)=>{

            const city = place.city.replace(regex, `<span class='hl'>${term}</span>`);
            const state = place.state.replace(regex, `<span class='hl'>${term}</span>`);
            const pop = place.population.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

            return `<li><span>${city}, ${state}</span> <span class='population'>${pop}</span></li>`;
        }).join('');
    }

    suggestions.innerHTML = html;
}

const filterCities = (e) => {
    const term = e.target.value;
    const regex = new RegExp(term, 'gi');
    const places = cities.filter((place) => {
        return place.city.match(regex) || place.state.match(regex);
    });
    displayResults(places, regex, term);
}

search.addEventListener('change', filterCities);
search.addEventListener('keyup', filterCities);