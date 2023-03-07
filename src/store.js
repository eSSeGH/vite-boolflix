import { reactive } from 'vue'
const store = reactive({
    fetchMoviesTrigger: 0,
    movies: [],
})

export default store