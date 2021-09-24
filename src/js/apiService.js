export default class apiService {
    constructor() {
        this.BASE_URL = "https://pixabay.com/";
        this.KEY = '&key=23495092-fcdd3993ee353ca97f61af1fc'
        this.searchQuery = "";
        this.page = 1;
    }
     makeFetch() {
    return fetch(`${this.BASE_URL}api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&${this.KEY}`)
        .then(response => {
        if (response.status === 200) {
        
          return response.json()
                }
        else {
         throw new Error (response.statusText)
        }
    })
    }

    get query() {
        this.searchQuery
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }
}




