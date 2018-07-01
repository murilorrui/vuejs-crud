<template lang="pug">
  .telefones
    v-layout(row wrap)
      v-flex(xs4)
        v-select(
          label="Tipo de telefone"
          :items="tiposTelefone"
          item-value="id"
          item-text="id"
          v-model="telefone.tipoTelefone"
          :rules="rules"
          required
          )
      v-flex(xs6)
        v-text-field(
          label="Telefone"
          :mask="mask"
          v-model="telefone.numero"
          :rules="rules"
          )
      v-flex(xs2)
        v-btn.secondary(@click="adicionarTelefone") Adicionar
          v-icon add
    v-layout(row wrap v-for="(telefone, index) in payload.telefones" :key="index")
      v-flex(xs4)
        v-select(
          label="Tipo de telefone"
          :items="tiposTelefone"
          item-value="id"
          item-text="id"
          v-model="telefone.tipoTelefone"
          disabled
          )
      v-flex(xs6)
        v-text-field(
          label="Telefone"
          :mask="mask"
          v-model="telefone.numero"
          disabled
          )
</template>

<script>
  export default {
    props: ['payload'],
    data: () => ({
      telefone: {
        tipoTelefone: '',
        numero: '',
      },
      tiposTelefone: [
        {
          id: 'FIXO',
        },
        {
          id: 'CELULAR',
        },
      ],
    }),
    computed: {
      rules() {
        return [this.payload.telefones.length || 'Campo obrigátorio'];
      },
      mask() {
        if (this.telefone.tipoTelefone === 'CELULAR') {
          return '(##)#####-####';
        }
        return '(##)####-####';
      },
    },
    methods: {
      adicionarTelefone() {
        this.payload.telefones.push(this.telefone);
        this.telefone = {};
      },
    },
  };
</script>
