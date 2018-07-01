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
        v-model="payload.dataNascimento"
        label="Data de aniverário"
        prepend-icon="event"
        readonly
        :rules="rules"
        required
        )
      v-date-picker(
        ref="picker"
        v-model="payload.dataNascimento"
        max="2002-01-01"
        @change="save"
        )
</template>

<script>
  import moment from 'moment';

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
        var data = new Date
        this.payload.idade = Math.floor(moment(new Date()).diff(moment(payload),'years',true));
        this.$refs.menu.save(payload)
      }
    },
    name: 'AniversarioForm',
  }
</script>
