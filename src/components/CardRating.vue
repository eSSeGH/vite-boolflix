<script>
import store from '../store';

export default {

    props: {
        vote_average: {
            type: Number,
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
    <span class="rating flex-center">
        <i class="fa-star" :class="(vote_average > 1) ? 'fa-solid' : 'fa-regular'"></i>
        <i class="fa-star" :class="(vote_average >= 2) ? 'fa-solid' : 'fa-regular'"></i>
        <i class="fa-star" :class="(vote_average >= 3) ? 'fa-solid' : 'fa-regular'"></i>
        <i class="fa-star" :class="(vote_average >= 4) ? 'fa-solid' : 'fa-regular'"></i>
        <i class="fa-star" :class="(vote_average >= 5) ? 'fa-solid' : 'fa-regular'"></i>
    </span>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.rating {
    color: blue;
    display: block;
    font-size: 1rem;

    i {
        font-family: 'Font Awesome 6 Free';
        color: rgb(255, 196, 0);
    }
}
</style>
