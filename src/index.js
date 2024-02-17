import { fetchBreeds, fetchCatByBreed } from "./cat-api"

import SlimSelect from 'slim-select'
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selector = document.querySelector('select.breed-select')
const catInfo = document.querySelector('.cat-info')
const loader = document.querySelector('.loader')
const error = document.querySelector('.error')


// catInfo.classList.replace('cat-info', 'hidden')
// console.log(catInfo)
error.style.visibility = "hidden"
catInfo.style.visibility = 'hidden';

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
    error.style.visibility = 'hidden';
    loader.style.visibility = 'hidden';
    catInfo.style.visibility = 'hidden'
    // loader.style.visibility = 'hidden';

    // loaderRef.classList.replace('loader', 'is-hidden');
    // console.log(loaderRef.classList)
    // loader.classList.replace('is-hidden', 'loader');
    // console.log(loader.classList.value)
    // selector.classList.add('is-hidden')
    // catInfo.classList.add('is-hidden')

    const breedId = evt.currentTarget.value

    fetchCatByBreed(breedId)
        .then(data => {
            catInfo.innerHTML = createMakcup(data)
            catInfo.style.visibility = 'visible'
        })
        .catch(onFetchError)

    // .finally(() => setTimeout(onFinally, 2000));
    // if (breedId === 'abys') {
    //     catInfo.innerHTML = ''
    // } else {
    //     fetchCatByBreed(breedId)
    //         .then(data => {
    //             loader.classList.replace('is-hidden', 'loader')
    //             selector.classList.remove('is-hidden')
    //             catInfo.innerHTML = createMakcup(data)
    //         })
    //         .catch(onFetchError)
    // }

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
    loader.style.visibility = 'hidden';
    error.style.visibility = "visible"
    // error.classList.add('error')

    Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
        position: 'center-center',
        timeout: 5000,
        width: '400px',
        fontSize: '24px'
    });
};


