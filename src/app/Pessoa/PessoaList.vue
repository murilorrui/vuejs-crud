<template lang="pug">
  list(
    :headers="headers"
    :items="pessoas"
    )
    template(slot="table-rows" slot-scope="props")
      td {{ props.item.nome }}
      td {{ props.item.idade }}
      td {{ props.item.cpf }}
      td {{ props.item.rg }}
      td
        v-layout(row)
           v-btn.mx-0(
             fab
             flat
             dark
             small
             color="primary"
             @click="editItem(props.item.entityId)"
             )
             v-icon edit
           v-btn.mx-0(
             fab
             flat
             dark
             small
             color="primary"
             @click="deleteItem(props.item.id)"
             )
             v-icon delete
</template>

<script>
  import List from '@/components/List';
  import pessoaService from '@/services/PessoaService';

  export default {
    components: {
      List,
    },
    data: () => ({
      pessoas: [],
      headers: [
        {
          text: 'Nome',
          align: 'left',
          sortable: false,
          value: 'nome',
          width: '30%',
        },
        {
          text: 'Idade',
          align: 'left',
          sortable: false,
          width: '10%',
        },
        {
          text: 'CPF',
          align: 'left',
          sortable: false,
          width: '20%',
        },
        {
          text: 'RG',
          align: 'left',
          sortable: false,
          width: '20%',
        },
        {
          text: 'Ações',
          align: 'left',
          sortable: false,
          width: '15%',
        },
      ],
    }),
    beforeMount() {
      this.getPessoas();
    },
    methods: {
      getPessoas() {
        pessoaService.getList({ pageNumber: 1, itemsPerPage: 10, razaoSocial: '' })
          .then(({ data }) => {
            this.pessoas = data;
          });
      },
      editItem(id) {
        this.$router.push(`/editar-pessoa/${id}`);
      },
      deleteItem(id) {
        pessoaService.delete(id);
        this.getPessoas();
      },
    },
  };
</script>
