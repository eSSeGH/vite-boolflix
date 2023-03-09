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
    <header class="header2">

    </header>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.header2 {
    height: 750px;
    background-image: url(/img/death-note-jumbotron.avif);
    background-position: center;
    background-size: cover;
    padding: 50px;

}
</style>
