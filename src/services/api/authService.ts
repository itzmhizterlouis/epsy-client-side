import axiosClient from '../http/axiosClient';
import { RegisterRequest, RegisterResponse, LoginRequest, LoginResponse, VerifyOtpRequest, VerifyOtpResponse } from '../../types/api/types';

class AuthService {
  async register(userData: RegisterRequest): Promise<RegisterResponse> {
    const response = await axiosClient.post<RegisterResponse>('/auth/register', userData);
    return response.data;
  }

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await axiosClient.post<LoginResponse>('/auth/login', credentials);
    return response.data;
  }

  async verifyOtp(otpData: VerifyOtpRequest): Promise<VerifyOtpResponse> {
    const response = await axiosClient.post<VerifyOtpResponse>('/auth/verify-otp', otpData);
    return response.data;
  }

  // Helper method to store token
  setToken(token: string): void {
    localStorage.setItem('epsy_token', token);
  }

  // Helper method to get token
  getToken(): string | null {
    return localStorage.getItem('epsy_token');
  }

  // Helper method to remove token
  removeToken(): void {
    localStorage.removeItem('epsy_token');
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export default new AuthService(); 