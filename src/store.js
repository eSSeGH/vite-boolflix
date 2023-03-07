import { reactive } from 'vue'
const store = reactive({
    fetchMoviesTrigger: false,
    movies: [],
    title: 'attack on titans',
    originalTitle: '',
    originalLang: '',
    rating: 0,
})

export default store