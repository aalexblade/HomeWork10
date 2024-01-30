import { fetchBreeds, fetchCatByBreed } from "./cat-api"

import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';


const selector = document.querySelector('select.breed-select')
const catInfo = document.querySelector('.cat-info')

let arrBreedsId = []

fetchBreeds()
    .then(data => {
        data.forEach(element => {
            arrBreedsId.push({ text: element.name, value: element.id })

        });

        new SlimSelect({
            select: selector,
            data: arrBreedsId
        })
    })
    .catch(error => console.error(error))


selector.addEventListener('change', onChange)

function onChange(evt) {
    evt.preventDefault()
    const breedId = evt.currentTarget.value

    fetchCatByBreed(breedId)
        .then(data => (catInfo.innerHTML = createMarcup(data)))
        .catch(error => console.log(error))
}

function createMarcup(arr) {

    // if (!arr === arr[0]) {
    //     return console.log(arr)
    // }

    return arr.map(({ url, breeds: { 0: { name, temperament, description, wikipedia_url } } }) =>
        `  <li class="list cats_list">
    <img src="${url}" alt="${name}" weight="300px" height="300px">
    <h2>${name}</h2>
    <p>${description}</p>
    <h3>Temperament</h3> 
    <p>${temperament}</p>
   <a href="${wikipedia_url}"> Wikipedia Info </a>
  </li>`
    ).join('')


};

