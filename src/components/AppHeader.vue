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
    methods: {
        handleScroll(event) {
            const headerEl = document.querySelector('.header')
            headerEl.style.transition = 'background-color 1s'
            headerEl.style.backgroundColor = 'black'
        },
    },
    created() {
        window.addEventListener('scroll', this.handleScroll)
    },
    updated() {
        console.log(headerEl)
    }
}
</script>

<template>
    <header class="header flex-center">

        <img class="logo" src="/img/netflix-logo-sticker.png" alt="Netflix extended logo">

        <nav class="nav flex-center">
            <ul style="display: contents;">
                <li class="nav-link">Home</li>
                <li class="nav-link">Serie TV</li>
                <li class="nav-link">Film</li>
                <li class="nav-link">Nuovi e popolari</li>
                <li class="nav-link">La mia lista</li>
                <li class="nav-link">Sfoglia per lingua</li>
            </ul>
        </nav>


        <div class="tools flex-center">

            <HeaderSearchBar></HeaderSearchBar>

            <font-awesome-icon class="bell icon" icon="fa-regular fa-bell"></font-awesome-icon>

            <div class="profile flex-center">

                <img src="/img/profile-img.jpg" alt="">
                <font-awesome-icon class="caret-down icon" icon="fa-solid fa-caret-down"></font-awesome-icon>

            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.header {
    height: 70px;
    background-color: rgba(0, 0, 0, 0);
    padding: 1.5rem;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;

    .logo {
        height: 70px;
        transition: filter 300ms;
        margin-right: 10px;

        &:hover {
            filter: drop-shadow(0 0 14px red);
        }
    }

    .nav {
        gap: 15px;
        flex-grow: 1;
        color: white;
        font-size: 0.75rem;

        .nav-link {
            transition: color 300ms;
            filter: drop-shadow(0 0 2px black);

            &:hover {
                color: rgb(190, 190, 190);
            }
        }
    }

    .tools {
        margin-left: auto;
        gap: 1rem;

        .bell {
            font-size: 1.2rem;
        }

        .profile {
            gap: 5px;

            img {
                height: 45px;
                aspect-ratio: 1;
                border-radius: 5px;
            }

            &:hover>.caret-down {
                animation-duration: 1s;
                animation-name: rotate;
                animation-timing-function: linear;
                animation-fill-mode: forwards;
            }
        }
    }
}

// ANIMATION 

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }



    50% {
        transform: rotate(180deg);
    }



    100% {
        tranform: rotate(270deg);
    }
}
</style>
