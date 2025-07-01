import axiosClient from '../http/axiosClient';

class ApiService {
  // Example API methods - replace with your actual API endpoints
  async getUsers() {
    const response = await axiosClient.get('/users');
    return response.data;
  }

  async getUserById(id: string) {
    const response = await axiosClient.get(`/users/${id}`);
    return response.data;
  }

  async createUser(userData: any) {
    const response = await axiosClient.post('/users', userData);
    return response.data;
  }

  async updateUser(id: string, userData: any) {
    const response = await axiosClient.put(`/users/${id}`, userData);
    return response.data;
  }

  async deleteUser(id: string) {
    const response = await axiosClient.delete(`/users/${id}`);
    return response.data;
  }
}

export default new ApiService(); 