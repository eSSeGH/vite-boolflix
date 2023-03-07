<script>
import store from '../store';
import axios from 'axios';
import MainCard from './MainCard.vue';
export default {
    components: {
        MainCard,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        fetchMovies() {
            console.log('fetching movies...')

            const basePath = 'https://api.themoviedb.org/3/search/movie'
            const apiKey = '118ee4fe19bc4428e43aec6ad56c7444'
            const query = this.store.title

            axios.get(basePath, {
                params: {
                    api_key: apiKey,
                    query,
                }
            })
                .then((res) => {
                    console.log(res)
                    console.log(res.data.results)

                    this.store.movies = res.data.results

                    const { title, original_title, original_language, vote_average } = res.data.results
                    this.store.title = title
                    this.store.originalTitle = original_title
                    this.store.originalLang = original_language
                    this.store.rating = vote_average

                    console.log(this.store)

                })
                .catch((error) => {
                    console.log('error')
                    this.store.movies = []
                })

            console.log('after fetching', this.store.fetchMoviesTrigger)
        }
    },
    computed: {
        fetchMoviesTriggerComp() {
            return this.store.fetchMoviesTrigger
        }
    },
    watch: {
        fetchMoviesTriggerComp(newVal, oldVal) {
            console.log('submit filters event has been watched')
            this.fetchMovies()
        }
    },
    created() {
        // console.log('store on creation', this.store)
        // this.fetchMovies()
    },
}
</script>

<template>
    <main>
        <div class="container">

            <MainCard class="col"></MainCard>

        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

main {
    padding: 2rem;

    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;

        .col {
            flex-basis: calc(100%/6 - 16px*5/6)
        }
    }
}
</style>
