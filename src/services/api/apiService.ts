import HttpClient from '../http/httpClient';

class ApiService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  // Example API methods - replace with your actual API endpoints
  async getUsers() {
    return this.httpClient.get('/users');
  }

  async getUserById(id: string) {
    return this.httpClient.get(`/users/${id}`);
  }

  async createUser(userData: any) {
    return this.httpClient.post('/users', userData);
  }

  async updateUser(id: string, userData: any) {
    return this.httpClient.put(`/users/${id}`, userData);
  }

  async deleteUser(id: string) {
    return this.httpClient.delete(`/users/${id}`);
  }
}

export default new ApiService(); 