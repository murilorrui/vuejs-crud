<template lang="pug">
  v-toolbar(
    color="secondary"
    extended
    )
    v-toolbar-title
    v-layout(justify-end)
      v-toolbar-items
        v-menu(
          bottom
          left
          offset-y
          data-app="true"
          )
          v-list-tile.pa-2(slot="activator")
            v-list-tile-content.ma-2.ml-3
              v-list-tile-title.white--text Usário
            v-list-tile-action
              v-icon(dark) keyboard_arrow_down
          v-list
            v-list-tile
              v-list-tile-title Logout
</template>

<script>
  export default {
    name: 'Toolbar',
  };
</script>
