<template lang="pug">
  page
    v-card-text
      slot(name="form-inputs")
    v-layout(justify-end)
      v-btn(flat :to="routerBack")
        | Cancelar
      v-btn.primary(
        @click="save"
        ) Salvar
</template>

<script>
import Page from '@/arch/Page';
import EventBus from '@/core/event-bus';


export default {
  components: {
    Page,
  },
  props: [
    'service',
    'payload',
    'validate',
  ],
  computed: {
    routerBack() {
      return this.$route.meta.routerBack;
    },
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    save() {
      if (!this.validate.validate()) return;
      const callback = this.service.save(this.payload);
      callback
        .then(() => {
          EventBus.$emit('snackbar', { active: true, color: 'success', msg: 'Ação realizada com sucesso.' });
          this.$router.push(this.routerBack);
        })
        .catch(() => {
          EventBus.$emit('snackbar', { active: true, color: 'error', msg: 'Não foi possível realizar a ação.' });
        });
    },
  },
  name: 'Form',
};
</script>
