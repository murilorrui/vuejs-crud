<template lang="pug">
  v-flex(xs6)
    v-text-field(
      label="CPF"
      mask="###.###.###-##"
      v-model="payload.cpf"
      :rules="cpf"
      required
      )
</template>

<script>
  export default {
    props: ['payload'],
    computed: {
      cpf() {
        if (this.payload.cpf === '') {
          return ['Campo obrigátorio'];
        }
        const validacao = this.validarCPF(this.payload.cpf);
        return [validacao || 'Cpf inválido'];
      },
    },
    methods: {
      validarCPF(inputCPF){
        var soma = 0;
        var resto;

        if(inputCPF == '00000000000') return false;
        for(let i=1; i<=9; i++) soma = soma + parseInt(inputCPF.substring(i-1, i)) * (11 - i);
        resto = (soma * 10) % 11;

        if((resto == 10) || (resto == 11)) resto = 0;
        if(resto != parseInt(inputCPF.substring(9, 10))) return false;

        soma = 0;
        for(let i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i-1, i))*(12-i);
        resto = (soma * 10) % 11;

        if((resto == 10) || (resto == 11)) resto = 0;
        if(resto != parseInt(inputCPF.substring(10, 11))) return false;
        return true;
      },
    },
  };
</script>
