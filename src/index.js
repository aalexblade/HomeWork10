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
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

