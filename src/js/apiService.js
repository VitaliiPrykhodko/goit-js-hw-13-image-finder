const BASE_URL = "https://pixabay.com/"
const KEY = '&key=23495092-fcdd3993ee353ca97f61af1fc'
const page = 1
const query = ""

fetch(`${BASE_URL}api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&${KEY}`)
    .then(response => response.json)
    .then(data => console.log(data))

