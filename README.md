# React TypeScript Application

A modern, well-structured React application built with TypeScript, Tailwind CSS, and Vite for fast development and building.

## 🚀 Features

- **React 18** with latest features and hooks
- **TypeScript** for full type safety and better developer experience
- **Vite** for lightning-fast development and building
- **Tailwind CSS** for utility-first styling
- **Modular Architecture** with clear separation of concerns
- **API Integration** with reusable HTTP client and service layer
- **Custom Hooks** for common functionality
- **Form Validation** with comprehensive validation utilities
- **Responsive Design** with mobile-first approach

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI components (Button, Input, etc.)
│   ├── layout/          # Layout components (Header, Footer, etc.)
│   └── forms/           # Form-specific components
├── pages/               # Page components
├── services/            # API and external service integrations
│   ├── api/             # API service classes
│   └── http/            # HTTP client and utilities
├── types/               # TypeScript type definitions
│   ├── api/             # API-related types
│   └── common/          # Common utility types
├── utils/               # Utility functions
├── hooks/               # Custom React hooks
├── contexts/            # React contexts for state management
└── assets/              # Static assets (images, icons, etc.)
    ├── images/
    └── icons/
```

## 🛠️ Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **Vitest** - Testing framework

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd epsy-client-side
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`.

## 🔧 Available Scripts

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI interface

## 🏗️ Architecture Overview

### Components

Components are organized into three main categories:

1. **UI Components** (`src/components/ui/`)
   - Reusable, presentational components
   - Examples: Button, Input, Modal, etc.
   - Should be pure and stateless when possible

2. **Layout Components** (`src/components/layout/`)
   - Structural components that define page layout
   - Examples: Header, Footer, Sidebar, etc.

3. **Form Components** (`src/components/forms/`)
   - Form-specific components and form handling logic

### Services

The service layer provides a clean abstraction for API calls:

- **HTTP Client** (`src/services/http/httpClient.ts`)
  - Reusable HTTP client with TypeScript support
  - Built-in error handling and timeout management
  - Configurable base URL and headers

- **API Services** (`src/services/api/`)
  - Domain-specific API service classes
  - Type-safe API method definitions
  - Centralized API endpoint management

### Types

TypeScript types are organized for maintainability:

- **API Types** (`src/types/api/`)
  - Request/response interfaces
  - API-specific data structures
  - Error handling types

- **Common Types** (`src/types/common/`)
  - Shared utility types
  - Component prop interfaces
  - Generic type helpers

### Hooks

Custom hooks provide reusable logic:

- **useApi** - API call management with loading states
- **useLocalStorage** - Local storage integration
- Additional hooks can be added as needed

### Utils

Utility functions for common operations:

- **Validation** (`src/utils/validation.ts`)
  - Form validation helpers
  - Data validation functions
  - Custom validation rules

- **Helpers** (`src/utils/helpers.ts`)
  - Date formatting
  - String manipulation
  - Array/object utilities
  - Local storage helpers

## 🎨 Styling

This project uses **Tailwind CSS** for styling:

- Utility-first approach
- Responsive design built-in
- Customizable design system
- No custom CSS required for most components

### Tailwind Configuration

The Tailwind configuration is located in `tailwind.config.js` and can be extended with:
- Custom colors
- Custom spacing
- Custom components
- Custom utilities

## 🔌 API Integration

### HTTP Client

The application includes a robust HTTP client with:
- TypeScript support
- Automatic error handling
- Request/response interceptors
- Timeout management
- Abort controller support

### Usage Example

```typescript
import apiService from '../services/api/apiService';

// In a component
const { data, isLoading, error, execute } = useApi();

const fetchUsers = async () => {
  await execute(() => apiService.getUsers());
};
```

## 📝 Development Guidelines

### Code Standards

1. **TypeScript**
   - Use strict TypeScript configuration
   - Define interfaces for all props and data structures
   - Avoid `any` type when possible

2. **Component Structure**
   - Use functional components with hooks
   - Keep components small and focused
   - Use proper prop interfaces

3. **File Naming**
   - Use PascalCase for components: `UserProfile.tsx`
   - Use camelCase for utilities: `formatDate.ts`
   - Use kebab-case for CSS files: `user-profile.css`

4. **Import Organization**
   ```typescript
   // React imports
   import React from 'react';
   
   // Third-party imports
   import { useState, useEffect } from 'react';
   
   // Local imports
   import Button from '../components/ui/Button';
   import { useApi } from '../hooks/useApi';
   ```

### Best Practices

1. **State Management**
   - Use React hooks for local state
   - Consider Context API for global state
   - Keep state as close to where it's used as possible

2. **Performance**
   - Use React.memo for expensive components
   - Implement proper dependency arrays in useEffect
   - Use useCallback and useMemo when appropriate

3. **Error Handling**
   - Implement proper error boundaries
   - Use try-catch blocks for async operations
   - Provide meaningful error messages

4. **Accessibility**
   - Use semantic HTML elements
   - Include proper ARIA labels
   - Ensure keyboard navigation works

## 🧪 Testing

The project is set up with **Vitest** and React Testing Library:

```bash
npm test
```

### Testing Guidelines

- Test component behavior, not implementation
- Use meaningful test descriptions
- Mock external dependencies
- Test error states and edge cases

## 🚀 Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Environment Variables

Set up environment variables for different environments:

- `.env.local` - Local development
- `.env.production` - Production environment
- `.env.staging` - Staging environment

## ⚡ Vite Benefits

This project uses Vite for several advantages:

- **Lightning-fast development server** with Hot Module Replacement (HMR)
- **Instant hot reload** for React components
- **Optimized production builds** with tree-shaking
- **Native ES modules** for better performance
- **Built-in TypeScript support** without additional configuration
- **Plugin ecosystem** for extensibility

## 🤝 Contributing

1. Follow the established code standards
2. Write meaningful commit messages
3. Test your changes thoroughly
4. Update documentation as needed

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues, please refer to:
- React documentation: https://reactjs.org/
- TypeScript documentation: https://www.typescriptlang.org/
- Vite documentation: https://vitejs.dev/
- Tailwind CSS documentation: https://tailwindcss.com/
