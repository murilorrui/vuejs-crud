<template lang="pug">
  v-flex(xs12)
    v-text-field(
      label="Reservista"
      mask="######"
      v-model="payload.reservista"
      :rules="rules"
      required
      )
</template>

<script>
  export default {
    props: ['payload'],
    computed: {
      rules() {
        if (this.payload.idade > 18) {
          return [(this.payload.reservista !== '') || 'Campo obrigátorio'];
        }
        return [(this.payload.idade < 18) || 'Campo obrigátorio'];
      },
    },
  };
</script>
