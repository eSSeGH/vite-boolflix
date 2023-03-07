import { reactive } from 'vue'
const store = reactive({
    fetchMoviesTrigger: 0,
    movies: [],
    title: 'attack on titans',
    originalTitle: '',
    originalLang: '',
    rating: 0,
})

export default store