<script>
import { stringifyExpression } from '@vue/compiler-core';
import store from '../store';
export default {
    props: {
        original_language: {
            type: String,
        }
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <span class="lang" v-if="original_language === 'it'">
        <img src="/img/it-flag.png" alt="">
    </span>
    <span class="lang" v-else-if="original_language === 'es'">
        <img src="/img/sp-flag.png" alt="">
    </span>
    <span class="lang" v-else-if="original_language === 'en'">
        <img src="/img/en-flag.png" alt="">
    </span>
    <span class="lang" v-else-if="original_language === 'fr'">
        <img src="/img/fr-flag.png" alt="">
    </span>
    <span class="lang" v-else-if="original_language === 'ja'">
        <img src="/img/ja-flag.png" alt="">
    </span>
    <span class="lang" v-else-if="original_language === 'zh'">
        <img src="/img/ch-flag.png" alt="">
    </span>
    <span class="lang" v-else>
        Language: {{ original_language }}
    </span>
</template>

<style lang="scss" scoped>
@use '../style/general.scss' as *;

.lang {
    color: red;
    display: block;
    font-size: 1rem;
    margin-bottom: 5px;

    img {
        border-radius: 50%;
        width: 1rem;
        aspect-ratio: 1;
    }
}
</style>
