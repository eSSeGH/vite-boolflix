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
            flags: {
                it: "/img/it-flag.png",
                es: "/img/sp-flag.png",
                en: "/img/en-flag.png",
                ja: "/img/ja-flag.png",
                zh: "/img/ch-flag.png",
                fr: "/img/fr-flag.png",
            }
        }
    },
}
</script>

<template>
    <span class="lang" v-if="flags[original_language]">
        <img :src="flags[original_language]" alt="">
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
