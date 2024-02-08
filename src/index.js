import { fetchBreeds, fetchCatByBreed } from "./cat-api"

import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';

const selector = document.querySelector('select.breed-select')
const catInfo = document.querySelector('.cat-info')
const loader = document.querySelector('.loader')
const error = document.querySelector('.error')

let arrBreedsId = []

fetchBreeds()
    .then(data => {
        data.forEach(element => {
            arrBreedsId.push({ text: element.name, value: element.id });

        });
        new SlimSelect({
            select: selector,
            data: arrBreedsId,
        })
    })
    .catch(error => console.error(error))


selector.addEventListener('change', onSelectorChange)

function onSelectorChange(evt) {
    const breedId = evt.currentTarget.value

    if (breedId === 'abys') {
        catInfo.innerHTML = ''
    } else {
        fetchCatByBreed(breedId)
            .then(data => (catInfo.innerHTML = createMakcup(data)))
            .catch(error => console.log(error))
    }

}

function createMakcup(arr) {
    return arr.map(({ url, breeds: { 0: { name, temperament, description, wikipedia_url } } }) =>
        `<li class="list cats_list">
    <img src="${url}" alt="${name}" weight="300px" height="300px">
    <h2>${name}</h2>
    <p>${description}</p>
    <h3>Temperament</h3>
    <p>${temperament}</p>
   <a href="${wikipedia_url}"> Wikipedia Info </a>
  </li>`
    ).join('')

};

