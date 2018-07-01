<template lang="pug">
  #layout
    toolbar
    sidebar
    v-content
      v-container(fluid)
        v-slide-y-transition(mode="out-in")
          router-view
</template>

<script>
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';

export default {
  components: {
    Sidebar,
    Toolbar,
  },
  name: 'Layout',
};
</script>
