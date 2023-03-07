<script>
import HeaderSearchBar from './HeaderSearchBar.vue';
import store from '../store';

export default {
    components: {
        HeaderSearchBar,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <header class="header">

        <div class="container">

            <h1>Vite BoolFlix</h1>

            <HeaderSearchBar></HeaderSearchBar>

        </div>

    </header>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.header {
    height: 150px;
    background-color: rgba(0, 0, 0, 0.95);
    padding: 1.5rem;

    .container {

        h1 {
            text-align: center;
            font-size: 3rem;
            margin-bottom: 1rem;
            color: red;
        }

    }
}
</style>
