<script>
import store from '../store';
import CardLang from './CardLang.vue';
import CardRating from './CardRating.vue';

export default {
    components: {
        CardLang,
        CardRating,
    },
    props: {
        movieCard: {
            type: Object,
        },
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        to5Rating(rate10) {
            const rate5 = rate10 / 2
            const rate5Int = Math.round(rate5)

            return rate5Int
        }
    },
}
</script>

<template>
    <div class="card">

        <img :src="'https://image.tmdb.org/t/p/w342' + movieCard.poster_path" alt="">

        <h3 class="title">{{ movieCard.title }}</h3>
        <h3 class="title">{{ movieCard.name }}</h3>
        <h3 class="original-title"><em> {{ movieCard.original_title }} </em></h3>
        <h3 class="original-title"><em> {{ movieCard.original_name }} </em></h3>

        <CardLang :original_language="movieCard.original_language"></CardLang>

        <CardRating class="rating" :vote_average="to5Rating(movieCard.vote_average)"></CardRating>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.card {
    padding: 20px;
    color: burlywood;
    border-radius: 20px;
    border: 1px solid black;

    .title {
        color: black;
        font-size: 1.2rem;
        margin-bottom: 10px;
    }

    .original-title {
        color: black;
        font-size: 1rem;
    }

    .lang {
        color: red;
        display: block;
        font-size: 1rem;
        margin-bottom: 5px;

        img {
            border-radius: 50%;
            width: 12px;
            aspect-ratio: 1;
        }
    }

    .rating {
        color: blue;
        display: block;
        font-size: 1rem;
    }
}
</style>
