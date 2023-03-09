<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppHero from './components/AppHero.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppHero,
  },
  data() {
    return {

    }
  },
}
</script>

<template>
  <AppHeader />
  <AppHero />
  <AppMain />
</template>

<style lang="scss" scoped>
@use './style/general.scss' as *;
</style>
