import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ProductCard, CategoryCard } from '../components/ui';
import { mockCategories, getAllProducts, getProductsByCategory, searchProducts } from '../services/api/mockData';
import { Product } from '../types/api/types';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    loadProducts();
  }, [selectedCategory]);

  const loadProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      let filteredProducts: Product[];
      if (selectedCategory) {
        filteredProducts = getProductsByCategory(selectedCategory);
      } else {
        filteredProducts = getAllProducts();
      }
      setProducts(filteredProducts);
      setIsLoading(false);
    }, 300);
  };

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        const searchResults = searchProducts(searchQuery);
        setProducts(searchResults);
        setIsLoading(false);
      }, 300);
    } else {
      loadProducts();
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery('');
    loadProducts();
  };

  // const formatPrice = (price: number) => {
  //   return new Intl.NumberFormat('en-NG', {
  //     style: 'currency',
  //     currency: 'NGN',
  //     minimumFractionDigits: 0,
  //     maximumFractionDigits: 0,
  //   }).format(price);
  // };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600 hover-scale transition-transform duration-200 cursor-pointer" onClick={() => navigate('/')}>
                Epsy
              </h1>
              <span className="ml-2 text-sm text-gray-600">Covenant University</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  🔍
                </button>
              </div>
              <Button
                onClick={() => navigate('/dashboard')}
                className="bg-blue-600 hover:bg-blue-700 hover-scale transition-all duration-200 shadow-md hover:shadow-lg"
              >
                My Account
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories Section */}
        <section className="mb-8">
          <div className={`flex items-center justify-between mb-6 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-2xl font-bold text-gray-900">Browse Categories</h2>
            {(selectedCategory || searchQuery) && (
              <Button
                onClick={handleClearFilters}
                variant="ghost"
                className="text-gray-600 hover:text-blue-600 hover-scale transition-all duration-200"
              >
                Clear Filters
              </Button>
            )}
          </div>
          
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {mockCategories.map((category, index) => (
              <div
                key={category.id}
                className={`transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CategoryCard
                  category={category}
                  onClick={() => handleCategoryClick(category.id)}
                  isSelected={selectedCategory === category.id}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section>
          <div className={`flex items-center justify-between mb-6 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory 
                  ? `${mockCategories.find(c => c.id === selectedCategory)?.name} Products`
                  : searchQuery 
                    ? `Search Results for "${searchQuery}"`
                    : 'All Products'
                }
              </h2>
              <p className="text-gray-600 mt-1">
                {products.length} product{products.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={product.productId}
                  className={`transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 25}ms` }}
                >
                  <ProductCard
                    product={product}
                    onClick={() => {
                      // TODO: Navigate to product detail page
                      console.log('Product clicked:', product.name);
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={`text-center py-12 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-4">
                {searchQuery 
                  ? `No products match your search for "${searchQuery}"`
                  : selectedCategory 
                    ? `No products available in ${mockCategories.find(c => c.id === selectedCategory)?.name}`
                    : 'No products available at the moment'
                }
              </p>
              <Button
                onClick={handleClearFilters}
                className="bg-blue-600 hover:bg-blue-700 hover-scale transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Browse All Products
              </Button>
            </div>
          )}
        </section>

        {/* Call to Action */}
        {!selectedCategory && !searchQuery && (
          <section className={`mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have something to sell?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of Covenant University students who are already selling their products on Epsy. 
              It's free to list and you can start earning today!
            </p>
            <Button
              onClick={() => navigate('/signup')}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 hover-scale transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Start Selling Now
            </Button>
          </section>
        )}

        {/* Quick Stats */}
        {!selectedCategory && !searchQuery && (
          <section className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover-lift text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Active Vendors</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover-lift text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2,000+</div>
              <div className="text-gray-600">Products Listed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover-lift text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Home; 