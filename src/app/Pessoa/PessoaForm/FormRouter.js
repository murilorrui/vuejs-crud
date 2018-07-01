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
  },
];
