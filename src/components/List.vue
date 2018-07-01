<template lang="pug">
  page
    v-card.elevation-0
      v-card-title
        v-text-field(
          v-model="search"
          append-icon="search"
          label="Buscar..."
          single-line
          hide-details
          )
    template(slot="button-bar")
      v-btn(
        color="primary"
        :to="routerGo"
        ) Adicionar
        v-icon.ml-3 add
    v-data-table(
      :items="items"
      :headers="headers"
      :search="search"
      )
      template(slot="items" slot-scope="props")
        tr
          slot(
            name="table-rows"
            :item="props.item"
            )
</template>

<script>
import Page from '@/arch/Page';

export default {
  data: () => ({
    pagination: {
      sortBy: 'name',
    },
    domainName: '',
    search: '',
  }),
  props: ['items', 'headers'],
  computed: {
    routerGo() {
      return this.$route.meta.routerGo;
    },
  },
  components: {
    Page,
  },
  name: 'List',
};
</script>
