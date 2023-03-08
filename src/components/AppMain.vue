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

                    console.log(this.store)
                })
                .catch((error) => {
                    console.log('error')
                    moviesArr = []
                })

            console.log('after fetching', this.store.fetchMoviesTrigger)
        },
        fetchTvSeries() {
            console.log('fetching tv series...')

            const basePath = 'https://api.themoviedb.org/3/search/tv'
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

                    this.store.tvSeries = res.data.results

                    console.log(this.store)
                })
                .catch((error) => {
                    console.log('error')
                    tvSeriesArr = []
                })

            console.log('after fetching', this.store.fetchMoviesTrigger)
        },
    },
    computed: {
        fetchMoviesTriggerComp() {
            return this.store.fetchMoviesTrigger
        },
        moviesArr() {
            return this.store.movies
        },
        tvSeriesArr() {
            return this.store.tvSeries
        }
    },
    watch: {
        fetchMoviesTriggerComp(newVal, oldVal) {
            console.log('submit filters event has been watched')
            this.fetchMovies()
            this.fetchTvSeries()
        }
    },
}
</script>

<template>
    <main>
        <div class="container">

            <section class="movies-list" v-if="moviesArr.length > 0">
                <h2>FILM</h2>

                <MainCard v-for="(el, i) in store.movies" :key="i" :movieCard="el" :title="moviesArr.title"
                    :original_title="moviesArr.original_title" :original_language="moviesArr.original_language"
                    :vote_average="moviesArr.vote_average" class="col"></MainCard>
            </section>

            <section class="tv-series-list" v-if="tvSeriesArr.length > 0">
                <h2>SERIE TV</h2>

                <MainCard v-for="(el, i) in store.tvSeries" :key="i" :movieCard="el" :name="tvSeriesArr.name"
                    :original_name="tvSeriesArr.original_name" :original_language="tvSeriesArr.original_language"
                    :vote_average="tvSeriesArr.vote_average" class="col"></MainCard>
            </section>

        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

main {
    padding: 2rem;

    .container {

        .col {
            flex-basis: calc(100%/6 - 16px*5/6)
        }

        .movies-list {
            display: block;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            padding-bottom: 20px;

            h2 {
                flex-basis: 100%;
            }
        }

        .tv-series-list {
            display: block;
            display: flex;
            flex-wrap: wrap;
            gap: 16px;

            h2 {
                flex-basis: 100%;
            }
        }
    }
}
</style>
