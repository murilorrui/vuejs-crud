<template lang="pug">
  v-card.card--flex-toolbar(raised)
    v-toolbar(card prominent)
      v-toolbar-title
        v-layout(row align-center)
          v-icon {{ icon }}
          .ml-3 {{ title }}
      v-spacer
      slot(name="button-bar")
    v-divider
    v-card-text
      slot
</template>

<script>
  export default {
    computed: {
      title() {
        const route = this.$route;
        return route.meta.title;
      },
      icon() {
        const route = this.$route;
        return route.meta.icon;
      },
    },
    name: 'Page',
  };
</script>

<style lang="sass">
  .card--flex-toolbar
    margin-top: -80px
    position: relative
    z-index: 2
</style>
