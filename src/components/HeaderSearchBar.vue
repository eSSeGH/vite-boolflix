<script>
import store from '../store';
export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section class="searchbar">

        <div class="container flex-center">

            <div class="title-form">
                <label for="title-form-input">TITOLO</label>
                <input class="title-form-input" type="text" placeholder="Digita il titolo che stai cercando...">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.searchbar {

    .container {
        justify-content: space-around;

        .title-form {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            label {
                font-size: 0.75rem;
                color: red;
            }

            .title-form-input {
                width: 200px;
            }
        }
    }
}
</style>
