import qs from 'qs';
import http from './http';

export default class CrudService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(id) {
    return http.get(`${this.baseUrl}/${id}`);
  }

  getList() {
    return http.get(`${this.baseUrl}`);
  }

  save(item) {
    return http.post(`${this.baseUrl}`, item);
  }

  delete(id) {
    return http.delete(`${this.baseUrl}/${id}`);
  }
}
