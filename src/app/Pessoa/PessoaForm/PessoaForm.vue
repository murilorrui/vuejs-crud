<template lang="pug">
  formulario(
    :service="pessoaService"
    :payload="payload"
    :validate="$refs.form"
    )
    template(slot="form-inputs")
      v-form(
        ref="form"
        v-model="valid"
        )
        v-container(grid-list-lg)
          v-layout(row wrap)
            v-flex(xs8)
              v-text-field(
                label="Nome"
                counter
                maxlength="40"
                minlength="10"
                :rules="rulesNome"
                v-model="payload.nome"
                required
                )
            sexo-form(:payload="payload")
            cpf-form(:payload="payload")
            rg-form(:payload="payload")
            aniversario-form(:payload="payload")
            v-flex(xs4)
              v-text-field(
                label="Idade"
                disabled
                v-model="payload.idade"
                required
                )
            data-form(:payload="payload")
          reservista-form(:payload="payload" v-if="payload.sexo === 'MASCULINO'")
          telefone-form(:payload="payload")
</template>

<script>
  import Formulario from '@/components/Form';
  import SexoForm from '@/components/SexoForm';
  import CpfForm from '@/components/CpfForm';
  import RgForm from '@/components/RgForm';
  import ReservistaForm from '@/components/ReservistaForm';
  import AniversarioForm from '@/components/AniversarioForm';
  import DataForm from '@/components/DataForm';
  import TelefoneForm from '@/components/TelefoneForm';
  import pessoaService from '@/services/PessoaService';

  export default {
    components: {
      Formulario,
      SexoForm,
      CpfForm,
      RgForm,
      ReservistaForm,
      AniversarioForm,
      DataForm,
      TelefoneForm,
    },
    data: () => ({
      pessoaService,
      isPasswordHide: true,
      payload: {
        nome: '',
        sexo: '',
        cpf: '',
        rg: '',
        reservista: '',
        dataNascimento: '',
        dataCriacao: '',
        idade: 0,
        telefones: [],
      },
      rulesNome: [
        v => v.length < 40 || 'Nome deve ter no máximo 40 caracters',
        v => v.length >= 10 || 'Nome deve ter no mínimo 10 caracters',
      ],
      valid: true,
    }),
    computed: {
      id() {
        return this.$route.params.id;
      },
      passwordFieldType() {
        return this.isPasswordHide ? 'password' : 'text';
      },
      passwordFieldIcon() {
        return this.isPasswordHide ? 'visibility' : 'visibility_off';
      },
    },
    created() {
      if (this.id) {
        this.getItem();
      }
    },
    methods: {
      getItem() {
        pessoaService.get({ entityId: this.id }).then(({ data }) => {
          this.payload = data;
        });
      },
      togglePasswordVisibility() {
        this.isPasswordHide = !this.isPasswordHide;
      },
    },
  };
</script>

<style lang="sass">
  input
    text-transform: uppercase !important
</style>
