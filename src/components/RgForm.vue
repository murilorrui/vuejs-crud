<template lang="pug">
  v-flex(xs6)
    v-text-field(
      label="RG"
      mask="##.###.###-#"
      v-model="payload.rg"
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
