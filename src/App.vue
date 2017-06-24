<template>
  <div id="app">
    <icon class="logo" name="logo"></icon>
    <router-view></router-view>
    <div>
      <button @click="setLang(lang)" v-for="lang in locales" :disabled="isLang(lang)">
        {{ $t('locales.' + lang) }}
      </button>
    </div>

    <hr>

    <div>
      <button @click="increment">
        {{ $tc('message.counter', countPlural, { n: count }) }}
      </button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex'

  export default {
    computed: {
      ...mapGetters(['countPlural']),
      ...mapState(['count'])
    },
    methods: mapActions({ 'increment': 'INCREMENT' })
  }
</script>

<style lang="stylus">
  @import "styles"

  html
    +below(600px)
      font-style 50%

  #app
    align()
    text-align center

  .icon-logo
    margin-bottom 2.5rem

</style>
