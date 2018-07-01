<template lang="pug">
  v-flex(xs4)
    v-select(
      label="Sexo"
      :items="sexos"
      item-value="id"
      item-text="id"
      v-model="payload.sexo"
      :rules="rules"
      required
      )
</template>

<script>
  export default {
    props: ['payload'],
    data: () => ({
      sexos: [
        {
          id: 'MASCULINO',
        },
        {
          id: 'FEMININO',
        },
      ],
      rules: [
        v => !!v || 'Campo obrigátorio'
      ],
    }),
  };
</script>
