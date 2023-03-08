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
    <body>
        <span class="rating flex-center">
            <span>Rating: {{ to5Rating(vote_average) }}</span>

            <!-- <i class="fa-star" :class="(vote_average = 0) ? 'fa-regular' : 'fa-solid'"></i>
                <i class="fa-star" :class="(vote_average < 1) ? 'fa-regular' : 'fa-solid'"></i>
                <i class="fa-star" :class="(vote_average < 2) ? 'fa-regular' : 'fa-solid'"></i>
                <i class="fa-star" :class="(vote_average < 3) ? 'fa-regular' : 'fa-solid'"></i>
                <i class="fa-star" :class="(vote_average < 4) ? 'fa-regular' : 'fa-solid'"></i>

                <i class="fa-solid fa-star"></i> -->
        </span>
    </body>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.rating {
    color: blue;
    display: block;
    font-size: 1rem;
}
</style>
