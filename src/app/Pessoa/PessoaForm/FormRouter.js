export default [
  {
    path: '/criar-pessoa',
    name: 'Cadastrar pessoa',
    component: () => import('./PessoaForm'),
    meta: {
      routerBack: 'pessoas',
      domain: 'Pessoas',
      sidebar: false,
      icon: 'account_circle',
      title: 'Cadastrar pessoa',
    },
    children: [
      {
        name: 'Editar pessoa',
        path: '/editar-pessoa/:id',
        meta: {
          sidebar: false,
          routerBack: '/pessoa',
          domain: 'Pessoa',
          title: 'Editar pessoa',
          icon: 'edit',
        },
      },
    ],
  },
];
