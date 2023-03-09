<script>
import store from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        onSubmitFilters() {
            console.log('onSubMitFilters event triggered from HeaderSearchBar!')
            this.store.fetchMoviesTrigger += 1
        }
    }
}
</script>

<template>
    <section class="searchbar">

        <div class="container flex-center">

            <input class="title-form-input" v-model="store.title" type="text"
                placeholder="Digita il titolo che stai cercando...">

            <button class="submit-filters" @click="onSubmitFilters">
                <font-awesome-icon class="magnifying-glass icon" icon="fa-solid fa-magnifying-glass"></font-awesome-icon>
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.searchbar {

    .container {
        justify-content: space-around;
        gap: 1rem;

        &:hover>.title-form-input {
            width: 200px;
            background-color: black;
            border: 1px solid white;
        }

        .title-form-input {
            width: 0;
            background-color: rgba(0, 0, 0, 0);
            border: none;
            color: white;
            height: 1.5rem;
            transition: width 700ms, background-color 0ms, border 0ms;
        }

        .submit-filters {
            border: none;
            background-color: rgba(0, 0, 0, 0);
            align-self: flex-end;

            .magnifying-glass {
                font-size: 1.2rem;
            }

        }
    }
}
</style>
