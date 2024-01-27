// import axios from "axios";

// axios.defaults.headers.common["x-api-key"] = "live_s56mlaRnOOfE38N81kMo5nxNcdC95E8Vn8auXVJQjPj8RPOjcHmv8PWftu7AeEmR";


// const URL = fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME")
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

// console.log(URL)


// const url = `https://api.thecatapi.com/v1/images/search`;
// const api_key = "live_s56mlaRnOOfE38N81kMo5nxNcdC95E8Vn8auXVJQjPj8RPOjcHmv8PWftu7AeEmR"
// let storedBreeds = []

// fetch(url, {
//     headers: {
//         'x-api-key': api_key
//     }
// })
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {

//         //filter to only include those with an `image` object
//         data = data.filter(img => img.image?.url != null)

//         storedBreeds = data;

//         for (let i = 0; i < storedBreeds.length; i++) {
//             const breed = storedBreeds[i];
//             let option = document.createElement('option');

//             //skip any breeds that don't have an image
//             if (!breed.image) continue

//             //use the current array index
//             option.value = i;
//             option.innerHTML = `${breed.name}`;
//             document.getElementById('breed_selector').appendChild(option);

//         }
//         //show the first breed by default
//         showBreedImage(0)
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// function showBreedImage(index) {
//     document.getElementById("breed_image").src = storedBreeds[index].image.url;

//     document.getElementById("breed_json").textContent = storedBreeds[index].temperament


//     document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url
//     document.getElementById("wiki_link").innerHTML = storedBreeds[index].wikipedia_url
// }

// https://api.thecatapi.com/v1/breeds
// url = `https://api.thecatapi.com/v1/images/search`;

// import axios from "axios";

// function fetchBreeds() {
// const BASE_URL = "https://api.thecatapi.com/v1/images/search?";
// const API_KEY = "live_s56mlaRnOOfE38N81kMo5nxNcdC95E8Vn8auXVJQjPj8RPOjcHmv8PWftu7AeEmR"
// axios.defaults.headers.common["x-api-key"] = "live_s56mlaRnOOfE38N81kMo5nxNcdC95E8Vn8auXVJQjPj8RPOjcHmv8PWftu7AeEmR";




// fetch(BASE_URL, {
//     headers: {
//         'x-api-key': API_KEY
//     }
// })
//     .then(response => response.json())
//     .then(console.log)
//     .catch(error => console.log('error', error))

// };
// console.log(fetchBreeds)


// const selectSearch = document.querySelector('select.breed-select')
// const catInfo = document.querySelector('.cat-info')

// console.log(selectSearch)
// https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи
// const BASE_URL = "https://api.thecatapi.com/v1/images/search?";
// const API_KEY = "live_s56mlaRnOOfE38N81kMo5nxNcdC95E8Vn8auXVJQjPj8RPOjcHmv8PWftu7AeEmR"
// fetch(BASE_URL, {
//     headers: {
//         'x-api-key': API_KEY
//     }
// })
//     .then(response => response.json())
//     .then(console.log)
//     .catch(error => console.log('error', error))
// console.log(fetch)

// const BASE_URL = "https://api.thecatapi.com/v1/images/search?breed_ids";
// const API_KEY = "live_s56mlaRnOOfE38N81kMo5nxNcdC95E8Vn8auXVJQjPj8RPOjcHmv8PWftu7AeEmR"
// return fetch(BASE_URL, {
//     headers: {
//         'x-api-key': API_KEY
//     }
// })
//     .then(response => response.json())
//     .then(console.log)


// =============================================================================

// const selectBreed = document.querySelector('.breed-select')
// const catInfo = document.querySelector('.cat-info')

// selectBreed.addEventListener('change', onChange)

// function onChange(evt) {
//     evt.preventDefault()

//     const { name } = evt.currentTarget.value
//     console.log(name)
// }

// // https://api.thecatapi.com/v1/breeds
// // https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_s56mlaRnOOfE38N81kMo5nxNcdC95E8Vn8auXVJQjPj8RPOjcHmv8PWftu7AeEmR
// function fetchBreeds(breedId) {

//     const BASE_URL = "https://api.thecatapi.com/v1";
//     const API_KEY = "live_s56mlaRnOOfE38N81kMo5nxNcdC95E8Vn8auXVJQjPj8RPOjcHmv8PWftu7AeEmR"
//     // fetch(`${BASE_URL}?breed_ids=${id}&api_key=${API_KEY}`)
//     return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status)
//             }
//             return response.json()
//         })

// }

// fetchBreeds('beng')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// ======================================================================================

// const selectBreed = document.querySelector('.breed-select')
// const catInfo = document.querySelector('.cat-info')

// selectBreed.addEventListener('change', onChange)

// function onChange(evt) {
//     evt.preventDefault()

//     const breedId = evt.currentTarget.value
//     console.log(breedId)

// }

// // https://api.thecatapi.com/v1/breeds
// // https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_s56mlaRnOOfE38N81kMo5nxNcdC95E8Vn8auXVJQjPj8RPOjcHmv8PWftu7AeEmR
// function fetchBreeds() {

//     const BASE_URL = "https://api.thecatapi.com/v1/images/search?limit=60";
//     const API_KEY = "live_s56mlaRnOOfE38N81kMo5nxNcdC95E8Vn8auXVJQjPj8RPOjcHmv8PWftu7AeEmR"

//     return fetch(`${BASE_URL}&breed_ids=beng&api_key=${API_KEY}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status)
//             }
//             return response.json()
//         })

// }

// fetchBreeds()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


const selector = document.querySelector('select.breed-select')
const catInfo = document.querySelector('.cat-info')

let arrCats = []

selector.addEventListener('change', onChange)


function onChange(evt) {
    evt.preventDefault()
    // console.log(evt.currentTarget)
    const { breedId } = evt.currentTarget.value;

    // fetchBreeds()
    //     .then(data => {
    //         data.forEach(element => {
    //             arrCats.push({ text: element.value, value: element.id })
    //         })
    //     })
    //     .catch(err => console.log(err))

    // selector.document.createElement
    // selector.classList.add('options')
    // console.log(selector.classList)
    // console.log(eve.currentTarget.value)
    // const breedId = evt.currentTarget.value
    // console.log(breedId)


}


// const url = 'https://api.thecatapi.com/v1';
// const api_key = "live_s56mlaRnOOfE38N81kMo5nxNcdC95E8Vn8auXVJQjPj8RPOjcHmv8PWftu7AeEmR";


// function fetchCatByBreed(breedId) {
//     return fetch(`${url}/images/search?api_key=${api_key}&breed_ids=${breedId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json()
//         });
// };

// export function fetchBreeds() {
//     return fetch(`${url}/breeds?api_key=${api_key}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         });
// };
// fetchBreeds()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// fetchCatByBreed('beng')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))




// =================================================================
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//     .map((technology) => `<li class="list-item">${technology}</li>`)
//     .join("");

// Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;





const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_s56mlaRnOOfE38N81kMo5nxNcdC95E8Vn8auXVJQjPj8RPOjcHmv8PWftu7AeEmR"
let storedBreeds = []

fetch(url, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        //filter to only include those with an `image` object
        data = data.filter(img => img.image?.url != null)

        storedBreeds = data;
        console.log(storedBreeds)

        for (let i = 0; i < storedBreeds.length; i++) {
            const breed = storedBreeds[i];
            let option = document.createElement('option');

            //skip any breeds that don't have an image
            if (!breed.image) continue

            //use the current array index
            option.value = i;
            option.innerHTML = `${breed.name}`;
            document.getElementById('breed_selector').appendChild(option);

        }
        // show the first breed by default
        showBreedImage(0)
    })
    .catch(function (error) {
        console.log(error);
    });


function showBreedImage(index) {
    catInfo.createElement.src = storedBreeds[index].image.url;

    document.getElementById("breed_json").textContent = storedBreeds[index].temperament


    // document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url
    // document.getElementById("wiki_link").innerHTML = storedBreeds[index].wikipedia_url
}