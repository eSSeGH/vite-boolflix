<script>
import store from '../store';
export default {
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
}
</script>

<template>
    <div class="card">

        <h3 class="title">{{ movieCard.title }}</h3>
        <h3 class="original-title"><em> {{ movieCard.original_title }} </em></h3>
        <span class="lang">Language: {{ movieCard.original_language }}</span>
        <span class="rating">Rating: {{ movieCard.vote_average }}</span>

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
        margin-bottom: 10px;
    }

    .lang {
        color: red;
        display: block;
        font-size: 1rem;
        margin-bottom: 5px;
    }

    .rating {
        color: blue;
        display: block;
        font-size: 1rem;
    }
}
</style>
