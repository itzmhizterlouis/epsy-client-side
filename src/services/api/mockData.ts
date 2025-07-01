import { Product, Category } from '../../types/api/types';

export const mockCategories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    icon: '📱',
    color: 'bg-blue-500',
    description: 'Phones, laptops, accessories and more'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    icon: '👕',
    color: 'bg-purple-500',
    description: 'Clothing, shoes, and accessories'
  },
  {
    id: 'books',
    name: 'Books',
    icon: '📚',
    color: 'bg-green-500',
    description: 'Textbooks, novels, and study materials'
  },
  {
    id: 'food',
    name: 'Food',
    icon: '🍕',
    color: 'bg-orange-500',
    description: 'Snacks, meals, and beverages'
  },
  {
    id: 'beauty',
    name: 'Beauty',
    icon: '💄',
    color: 'bg-pink-500',
    description: 'Cosmetics, skincare, and personal care'
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: '⚽',
    color: 'bg-red-500',
    description: 'Sports equipment and fitness gear'
  },
  {
    id: 'furniture',
    name: 'Furniture',
    icon: '🪑',
    color: 'bg-yellow-500',
    description: 'Room furniture and home decor'
  },
  {
    id: 'services',
    name: 'Services',
    icon: '🔧',
    color: 'bg-gray-500',
    description: 'Tutoring, cleaning, and other services'
  }
];

export const mockProducts: Product[] = [
  {
    productId: 1,
    name: 'iPhone 13 Pro',
    description: 'Excellent condition iPhone 13 Pro, 256GB, Space Gray. Comes with original box and charger.',
    imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    price: 85000,
    categories: 'electronics',
    quantity: 1,
    ownerId: 'user1',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z'
  },
  {
    productId: 2,
    name: 'MacBook Air M1',
    description: 'MacBook Air with M1 chip, 8GB RAM, 256GB SSD. Perfect for students.',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    price: 320000,
    categories: 'electronics',
    quantity: 1,
    ownerId: 'user2',
    createdAt: '2024-01-14T14:20:00Z',
    updatedAt: '2024-01-14T14:20:00Z'
  },
  {
    productId: 3,
    name: 'Nike Air Max 270',
    description: 'Brand new Nike Air Max 270, size 42. Perfect for running and casual wear.',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    price: 45000,
    categories: 'fashion',
    quantity: 1,
    ownerId: 'user3',
    createdAt: '2024-01-13T09:15:00Z',
    updatedAt: '2024-01-13T09:15:00Z'
  },
  {
    productId: 4,
    name: 'Calculus Textbook',
    description: 'Calculus: Early Transcendentals, 8th Edition. Used but in good condition.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    price: 8000,
    categories: 'books',
    quantity: 1,
    ownerId: 'user4',
    createdAt: '2024-01-12T16:45:00Z',
    updatedAt: '2024-01-12T16:45:00Z'
  },
  {
    productId: 5,
    name: 'Pizza Delivery',
    description: 'Fresh pizza delivery to your dorm. Pepperoni, Margherita, or Supreme available.',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
    price: 2500,
    categories: 'food',
    quantity: 10,
    ownerId: 'user5',
    createdAt: '2024-01-11T18:30:00Z',
    updatedAt: '2024-01-11T18:30:00Z'
  },
  {
    productId: 6,
    name: 'Skincare Set',
    description: 'Complete skincare routine set. Includes cleanser, toner, and moisturizer.',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    price: 15000,
    categories: 'beauty',
    quantity: 3,
    ownerId: 'user6',
    createdAt: '2024-01-10T11:20:00Z',
    updatedAt: '2024-01-10T11:20:00Z'
  },
  {
    productId: 7,
    name: 'Basketball',
    description: 'Official NBA basketball, size 7. Great for campus games.',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop',
    price: 12000,
    categories: 'sports',
    quantity: 2,
    ownerId: 'user7',
    createdAt: '2024-01-09T13:10:00Z',
    updatedAt: '2024-01-09T13:10:00Z'
  },
  {
    productId: 8,
    name: 'Study Desk',
    description: 'Wooden study desk with drawer. Perfect for dorm room.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    price: 35000,
    categories: 'furniture',
    quantity: 1,
    ownerId: 'user8',
    createdAt: '2024-01-08T15:25:00Z',
    updatedAt: '2024-01-08T15:25:00Z'
  },
  {
    productId: 9,
    name: 'Math Tutoring',
    description: 'One-on-one math tutoring sessions. Available for Calculus, Algebra, and Statistics.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop',
    price: 5000,
    categories: 'services',
    quantity: 20,
    ownerId: 'user9',
    createdAt: '2024-01-07T10:00:00Z',
    updatedAt: '2024-01-07T10:00:00Z'
  },
  {
    productId: 10,
    name: 'Wireless Earbuds',
    description: 'Samsung Galaxy Buds Pro. Excellent sound quality and noise cancellation.',
    imageUrl: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    price: 28000,
    categories: 'electronics',
    quantity: 1,
    ownerId: 'user10',
    createdAt: '2024-01-06T12:30:00Z',
    updatedAt: '2024-01-06T12:30:00Z'
  },
  {
    productId: 11,
    name: 'Denim Jacket',
    description: 'Vintage denim jacket, size M. Perfect for the cool campus style.',
    imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop',
    price: 18000,
    categories: 'fashion',
    quantity: 1,
    ownerId: 'user11',
    createdAt: '2024-01-05T14:15:00Z',
    updatedAt: '2024-01-05T14:15:00Z'
  },
  {
    productId: 12,
    name: 'Programming Books',
    description: 'Set of programming books: Python, JavaScript, and React. Great for CS students.',
    imageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop',
    price: 22000,
    categories: 'books',
    quantity: 1,
    ownerId: 'user12',
    createdAt: '2024-01-04T09:45:00Z',
    updatedAt: '2024-01-04T09:45:00Z'
  }
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return mockProducts.filter(product => 
    product.categories.toLowerCase().includes(categoryId.toLowerCase())
  );
};

export const getAllProducts = (): Product[] => {
  return mockProducts;
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockProducts.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.categories.toLowerCase().includes(lowercaseQuery)
  );
}; 