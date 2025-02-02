import React from 'react';
import { Book } from '../types';
import { Heart, MessageCircle } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={book.imageUrl}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
          </div>
          <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
        </div>
        
        <div className="mt-2 flex items-center">
          <span className="text-lg font-bold text-sky-500">₹{book.sellingPrice}</span>
          <span className="ml-2 text-sm text-gray-500 line-through">₹{book.originalPrice}</span>
          <span className="ml-2 text-sm text-yellow-500 font-medium">
            {Math.round((1 - book.sellingPrice / book.originalPrice) * 100)}% off
          </span>
        </div>

        <div className="mt-2 flex items-center text-sm text-gray-500">
          <span className={`px-2 py-1 rounded-full text-xs ${
            book.condition === 'Like New' ? 'bg-sky-100 text-sky-700' :
            book.condition === 'Very Good' ? 'bg-sky-50 text-sky-600' :
            book.condition === 'Good' ? 'bg-blue-50 text-blue-600' :
            'bg-slate-100 text-slate-600'
          }`}>
            {book.condition}
          </span>
          <span className="mx-2">•</span>
          <span>{book.genre}</span>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button className="flex items-center text-sky-500 hover:text-sky-600">
            <MessageCircle className="h-4 w-4 mr-1" />
            Contact Seller
          </button>
          <button className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm hover:bg-yellow-500 font-medium">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}