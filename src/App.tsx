import React from 'react';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import { Book } from './types';
import { BookOpen, Sparkles, RefreshCw, Shield } from 'lucide-react';

function App() {
  // Sample data
  const featuredBooks: Book[] = [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      originalPrice: 499,
      sellingPrice: 249,
      condition: 'Very Good',
      genre: 'Classic Literature',
      description: 'A well-maintained copy of this classic novel',
      imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
      language: 'English',
      sellerId: 'user1',
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      originalPrice: 599,
      sellingPrice: 299,
      condition: 'Like New',
      genre: 'Fiction',
      description: 'Barely used, in perfect condition',
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
      language: 'English',
      sellerId: 'user2',
      createdAt: new Date(),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-400 to-sky-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Your Books, Half the Price</h1>
            <p className="text-xl mb-8">Buy and sell pre-loved books in your community</p>
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
              Start Selling
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-sky-500" />
            </div>
            <h3 className="font-semibold mb-2">Vast Collection</h3>
            <p className="text-gray-600">Thousands of books across genres</p>
          </div>
          <div className="text-center">
            <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-6 w-6 text-sky-500" />
            </div>
            <h3 className="font-semibold mb-2">Quality Assured</h3>
            <p className="text-gray-600">Verified sellers and book condition</p>
          </div>
          <div className="text-center">
            <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="h-6 w-6 text-sky-500" />
            </div>
            <h3 className="font-semibold mb-2">Book Swapping</h3>
            <p className="text-gray-600">Exchange books with other readers</p>
          </div>
          <div className="text-center">
            <div className="bg-sky-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-sky-500" />
            </div>
            <h3 className="font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Safe and protected transactions</p>
          </div>
        </div>
      </div>

      {/* Featured Books */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;