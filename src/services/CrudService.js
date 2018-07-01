import qs from 'qs';
import http from './http';

export default class CrudService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(params = { entityId: '' }) {
    return http.get(`${this.baseUrl}?${qs.stringify(params)}`);
  }

  getList() {
    return http.get(`${this.baseUrl}`);
  }

  save(item) {
    return http.post(`${this.baseUrl}`, item);
  }

  edit(item) {
    return http.put(`${this.baseUrl}`, item);
  }

  delete(id) {
    return http.delete(`${this.baseUrl}/${id}`);
  }
}
