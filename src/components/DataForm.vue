<template lang="pug">
  v-flex(xs4)
    v-menu(
      ref="menu"
      :close-on-content-click="false"
      v-model="menu"
      :nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290px"
      )
      v-text-field(
        slot="activator"
        v-model="payload.dataCriacao"
        label="Data de criação"
        prepend-icon="event"
        readonly
        :rules="rules"
        required
        )
      v-date-picker(
        ref="picker"
        v-model="payload.dataCriacao"
        max="2017-07-01"
        @change="save"
        )
</template>

<script>
  export default {
    props: ['payload'],
    data: () => ({
      menu: false,
      rules: [
        v => !!v || 'Campo obrigátorio'
      ],
    }),
    watch: {
      menu (val) {
        val && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
      }
    },
    methods: {
      save (payload) {
        this.$refs.menu.save(payload)
      }
    },
    name: 'DataForm',
  }
</script>
