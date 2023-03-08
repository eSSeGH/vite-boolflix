import { reactive } from 'vue'
const store = reactive({
    fetchMoviesTrigger: 0,
    movies: [],
    tvSeries: [],
})

export default store