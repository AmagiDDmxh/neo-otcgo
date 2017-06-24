<template>
  <svg class="icon" :class="`icon-${name}`">
    <use :xlink:href="xlink" />
  </svg>
</template>

<script>
  export default {
    props: ['name'],
    computed: {
      xlink() {
        return require(`svg/${this.name}.svg`)
      }
    }
  }
</script>
