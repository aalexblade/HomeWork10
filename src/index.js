import { fetchBreeds, fetchCatByBreed } from "./cat-api"

import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selector = document.querySelector('select.breed-select')
const catInfo = document.querySelector('.cat-info')
const loader = document.querySelector('.loader')
const error = document.querySelector('.error')

loader.classList.replace('loader', 'is-hidden');
error.classList.add('is-hidden');
catInfo.classList.add('is-hidden');

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
    .catch(onFetchError)

selector.addEventListener('change', onSelectorChange)

function onSelectorChange(evt) {
    loader.classList.replace('is-hidden', 'loader');
    selector.classList.add('is-hidden');
    catInfo.classList.add('is-hidden');

    const breedId = evt.currentTarget.value

    fetchCatByBreed(breedId)
        .then(data => {
            catInfo.innerHTML = createMakcup(data)
            catInfo.classList.remove('is-hidden');
            loader.classList.replace('loader', 'is-hidden');
        })
        .catch(onFetchError)
}

function createMakcup(arr) {
    return arr.map(({ url, breeds: { 0: { name, temperament, description, wikipedia_url } } }) =>
        `<li class="list cats_list">
    <img src="${url}" alt="${name}">
    <h2>${name}</h2>
    <p>${description}</p>
    <h3>Temperament</h3>
    <p>${temperament}</p>
   <a href="${wikipedia_url}"> Wikipedia Info </a>
  </li>`
    ).join('')
};

function onFetchError() {
    selector.classList.remove('is-hidden');
    loader.classList.replace('loader', 'is-hidden');

    Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!',
        {
            position: 'center-center',
            timeout: 5000,
            width: '400px',
            fontSize: '24px'
        });
};


