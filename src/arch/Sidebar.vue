<template lang="pug">
  v-navigation-drawer.main-sidebar(
    app
    fixed
    persistent
    v-model="drawer"
    )
    v-layout.mt-3(column align-center justify-center)
      img(
        src="@/assets/logo.png"
        height="130"
        )
    v-list.transparent
      v-list-tile(
        v-for="(item, index) in sideBarRoutes"
        :key="index"
        :to="item.path"
        active-class="active"
        )
        v-list-tile-action
          v-icon(v-html="item.icon")
        v-list-tile-content
          v-list-tile-title.font-toolbar(v-text="item.title")
</template>

<script>
import routes from '@/router/routes';

export default {
  data: () => ({
    drawer: true,
  }),
  computed: {
    sideBarRoutes() {
      return routes
        .filter(route => route.meta.sidebar)
        .map(route => ({
          path: route.path,
          icon: route.meta.icon,
          title: route.meta.title,
        }));
    },
  },
  name: 'Sidebar',
};
</script>
