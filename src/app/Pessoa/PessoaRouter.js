export default [
  {
    path: '/pessoas',
    name: 'Pessoa',
    component: () => import('./PessoaList'),
    meta: {
      routerGo: '/criar-pessoa',
      domain: 'Pessoas',
      sidebar: true,
      icon: 'account_circle',
      title: 'Pessoas',
    },
  },
];
