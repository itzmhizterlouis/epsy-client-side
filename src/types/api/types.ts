// Base API response types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Authentication types
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
  isVendor: boolean;
  vendorCategory?: 'CLOTHING' | 'FOOD' | 'ELECTRONICS' | 'HEALTH' | 'BEAUTY' | 'SPORTS' | 'BOOKS' | 'OTHER';
}

export interface RegisterResponse {
  token: string | null;
  userId: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  userId: string;
}

export interface VerifyOtpRequest {
  email: string;
  code: number;
}

export interface VerifyOtpResponse {
  success: boolean;
}

// User types
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  isVendor: boolean;
  vendorCategory?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface UpdateUserRequest {
  name?: string;
  email?: string;
}

// Error types
export interface ApiError {
  message: string;
  status: number;
  code?: string;
}

export interface Product {
  productId: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  categories: string; // comma-separated string
  quantity: number;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface ProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sortBy?: 'price' | 'name' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
} 