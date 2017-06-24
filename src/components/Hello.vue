<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/">{{ $t('buttons.home') }}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$t('message.hello', { name: this.name })
    },
    name() {
      const name = this.$route.params.name
      return name.charAt(0).toUpperCase() + name.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

  h1, h2
    font-weight: normal
    color: green

</style>
