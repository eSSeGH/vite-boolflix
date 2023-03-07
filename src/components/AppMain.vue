<script>
import store from '../store';
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
