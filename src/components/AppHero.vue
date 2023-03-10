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
            jumbotrons: [
                '/img/death-note-jumbotron.avif',
                '/img/AOT-jumbotron.jpg',
                '/img/OP-jumbotron.webp',
                '/img/DB-jumbotron.jpg',
                '/img/AOT2-jumbotron.jpeg',
            ]
        }
    },
    mounted() {
        const jumbotronEl = document.querySelector('.header2')
        let jumboCounter = 1

        setInterval(() => {
            console.log(setInterval)
            jumbotronEl.style.backgroundImage = `url(${this.jumbotrons[jumboCounter]})`
            jumboCounter += 1

            console.log(this.jumbotrons.length)

            if (jumboCounter >= this.jumbotrons.length) {
                jumboCounter = 0
            }
            console.log(jumboCounter)

        }, 8000)
    }
}
</script>

<template>
    <header class="header2">



    </header>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.header2 {
    height: 100vh;
    background-image: url(/img/death-note-jumbotron.avif);
    background-position: center;
    background-size: cover;
    padding: 50px;
    margin-top: -70px;

}
</style>
