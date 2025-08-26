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

// Helper function to generate random dates within the last 30 days
const getRandomDate = () => {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 30);
  const date = new Date(now.getTime() - (daysAgo * 24 * 60 * 60 * 1000));
  return date.toISOString();
};

// Helper function to get random image URL
const getRandomImage = (category: string, index: number) => {
  const imageUrls = {
    electronics: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop'
    ],
    fashion: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop'
    ],
    books: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop'
    ],
    food: [
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1504674900240-9c9c9c9c9c9c?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop'
    ],
    beauty: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc6bcbe?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc6bcbe?w=400&h=400&fit=crop'
    ],
    sports: [
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'
    ],
    furniture: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop'
    ],
    services: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=400&fit=crop'
    ]
  };
  
  const urls = imageUrls[category as keyof typeof imageUrls] || imageUrls.electronics;
  return urls[index % urls.length];
};

export const mockProducts: Product[] = [
  // Original 12 products
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

// Generate additional 88 products to reach 100 total
const generateAdditionalProducts = () => {
  const additionalProducts: Product[] = [];
  const categories = ['electronics', 'fashion', 'books', 'food', 'beauty', 'sports', 'furniture', 'services'];
  
  const productNames = {
    electronics: [
      'Samsung Galaxy S21', 'iPad Air 4th Gen', 'Sony WH-1000XM4', 'Apple Watch Series 7',
      'Dell XPS 13', 'Logitech MX Master 3', 'JBL Flip 5', 'Canon EOS R6',
      'Nintendo Switch OLED', 'Razer BlackWidow V3', 'Samsung T7 SSD', 'Anker PowerCore 20000'
    ],
    fashion: [
      'Adidas Ultraboost 21', 'Levi\'s 501 Jeans', 'North Face Jacket', 'Ray-Ban Aviators',
      'Converse Chuck Taylors', 'H&M Sweater', 'Zara Blazer', 'Uniqlo T-Shirt',
      'Vans Old Skool', 'Timberland Boots', 'Supreme Hoodie', 'Nike Tech Fleece'
    ],
    books: [
      'Organic Chemistry Textbook', 'The Great Gatsby', 'Python Crash Course', 'To Kill a Mockingbird',
      'Physics for Scientists', '1984 by George Orwell', 'JavaScript Guide', 'Shakespeare Complete Works',
      'Microeconomics Textbook', 'The Hobbit', 'Data Structures & Algorithms', 'Pride and Prejudice'
    ],
    food: [
      'Burger Combo', 'Sushi Platter', 'Chicken Wings', 'Ice Cream Sundae',
      'Pasta Carbonara', 'Grilled Cheese', 'Fish Tacos', 'Chocolate Cake',
      'Caesar Salad', 'Beef Steak', 'Vegetable Curry', 'Fruit Smoothie'
    ],
    beauty: [
      'MAC Lipstick Set', 'La Mer Moisturizer', 'Dyson Hair Dryer', 'Chanel Perfume',
      'Estée Lauder Foundation', 'Urban Decay Palette', 'Clinique Cleanser', 'L\'Oreal Shampoo',
      'Nivea Body Lotion', 'Maybelline Mascara', 'Neutrogena Face Wash', 'Revlon Nail Polish'
    ],
    sports: [
      'Tennis Racket', 'Yoga Mat', 'Running Shoes', 'Dumbbells Set',
      'Football Jersey', 'Swimming Goggles', 'Bike Helmet', 'Golf Clubs',
      'Boxing Gloves', 'Hiking Boots', 'Skateboard', 'Fitness Tracker'
    ],
    furniture: [
      'Gaming Chair', 'Bookshelf', 'Coffee Table', 'Bed Frame',
      'Dining Table', 'Office Chair', 'Wardrobe', 'Sofa Set',
      'Nightstand', 'TV Stand', 'Kitchen Island', 'Bar Stools'
    ],
    services: [
      'Essay Writing Help', 'Room Cleaning', 'Laundry Service', 'Car Wash',
      'Photography Session', 'Music Lessons', 'Language Tutoring', 'Graphic Design',
      'Web Development', 'Content Writing', 'Video Editing', 'Social Media Management'
    ]
  };

  const descriptions = {
    electronics: [
      'High-quality electronics in excellent condition. Perfect for students.',
      'Brand new, never used. Comes with warranty and original packaging.',
      'Used but well-maintained. Great value for money.',
      'Latest model with all features. Ideal for academic use.'
    ],
    fashion: [
      'Stylish and comfortable. Perfect for campus life.',
      'Trendy design, great fit. Suitable for all occasions.',
      'Classic style that never goes out of fashion.',
      'High-quality material, durable construction.'
    ],
    books: [
      'Essential textbook for your course. Save money on new books.',
      'Classic literature in good condition. Expand your knowledge.',
      'Study material that will help you excel in your exams.',
      'Reference book with comprehensive information.'
    ],
    food: [
      'Delicious and fresh. Made with quality ingredients.',
      'Quick delivery to your location. Hot and ready to eat.',
      'Healthy options available. Customizable to your taste.',
      'Great value for money. Perfect for students on budget.'
    ],
    beauty: [
      'Premium beauty products. Enhance your natural beauty.',
      'Professional quality cosmetics. Long-lasting results.',
      'Skincare essentials for healthy skin. Dermatologist recommended.',
      'Affordable luxury. Treat yourself to quality products.'
    ],
    sports: [
      'Professional sports equipment. Improve your game.',
      'Durable and reliable. Built to last through intense use.',
      'Comfortable fit for maximum performance.',
      'Great for beginners and professionals alike.'
    ],
    furniture: [
      'Functional and stylish furniture. Perfect for small spaces.',
      'High-quality materials. Comfortable and durable.',
      'Modern design that fits any decor style.',
      'Space-saving solutions for dorm rooms.'
    ],
    services: [
      'Professional service at student-friendly prices.',
      'Experienced provider with excellent track record.',
      'Flexible scheduling to fit your busy lifestyle.',
      'Quality work guaranteed. Satisfaction assured.'
    ]
  };

  let productId = 13;
  
  categories.forEach(category => {
    const names = productNames[category as keyof typeof productNames];
    const descs = descriptions[category as keyof typeof descriptions];
    
    names.forEach((name, index) => {
      const price = Math.floor(Math.random() * 50000) + 5000; // Random price between 5000-55000
      const quantity = Math.floor(Math.random() * 5) + 1; // Random quantity between 1-5
      
      additionalProducts.push({
        productId: productId++,
        name,
        description: descs[index % descs.length],
        imageUrl: getRandomImage(category, index),
        price,
        categories: category,
        quantity,
        ownerId: `user${Math.floor(Math.random() * 50) + 1}`,
        createdAt: getRandomDate(),
        updatedAt: getRandomDate()
      });
    });
  });

  return additionalProducts;
};

// Add the additional products to the main array
mockProducts.push(...generateAdditionalProducts());

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

export const getProductById = (id: number): Product | undefined => {
  return mockProducts.find(product => product.productId === id);
}; 