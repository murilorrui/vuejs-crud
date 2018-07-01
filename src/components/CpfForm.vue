<template lang="pug">
  v-flex(xs6)
    v-text-field(
      label="CPF"
      mask="###.###.###-##"
      v-model="payload.cpf"
      :rules="rules"
      required
      )
</template>

<script>
  export default {
    props: ['payload'],
    data: () => ({
      rules: [
        v => !!v || 'Campo obrigátorio'
      ],
    }),
  };
</script>
