import CrudService from './CrudService';

class PessoaService extends CrudService {
  constructor() {
    super('/pessoas');
  }
}

const pessoaService = new PessoaService();
export default pessoaService;
