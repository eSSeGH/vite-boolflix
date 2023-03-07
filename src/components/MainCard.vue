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
    <div class="card">

        <h3 class="title"></h3>
        <h3 class="title-original"></h3>
        <span class="lang"></span>
        <span class="rating"></span>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.card {
    padding: 20px;
    color: burlywood;
    border-radius: 20px;

    .title {
        font-size: 1.5rem;
    }

    .title-original {
        font-size: 1.2rem;
    }

    .lang {
        font-size: 1rem;
    }

    .rating {
        font-size: 1rem;
    }
}
</style>
