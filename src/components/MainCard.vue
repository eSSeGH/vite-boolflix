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
            posterSrc: this.movieCard.poster_path ? 'https://image.tmdb.org/t/p/w342' + this.movieCard.poster_path : '/img/poster_placeholder.png',
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

        <img class="thumb" :src="posterSrc" alt="">

        <div class="show">

            <div class="info-text">
                <h3 class="title">{{ movieCard.title ? movieCard.title : movieCard.name }}</h3>
                <h4 class="original-title"><em> {{ movieCard.original_title ? movieCard.original_title :
                    movieCard.original_name }}</em></h4>
            </div>

            <span class="overview">{{ movieCard.overview }}</span>

            <div class="info-icon">
                <CardLang :original_language="movieCard.original_language"></CardLang>

                <CardRating class="rating" :vote_average="to5Rating(movieCard.vote_average)"></CardRating>
                <span class="vote-count">{{ movieCard.vote_count }}</span>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.card {
    border-radius: 20px;
    position: relative;

    &:hover>.show {
        display: flex;
    }

    .thumb {
        border-radius: 20px;
        height: 100%;
    }

    .show {
        background-color: rgba(0, 0, 0, 0.75);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0.75rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        display: none;
        color: white;

        .title {
            font-size: 1.2rem;
            margin-bottom: 10px;
        }

        .original-title {
            font-size: 1rem;
        }

        .overview {
            font-size: 0.75rem;
            height: 160px;
            overflow-y: auto;
        }

        .rating {
            display: inline-block;
            margin-right: 7px;
        }

        .vote-count {
            display: inline-block;
        }
    }
}
</style>
