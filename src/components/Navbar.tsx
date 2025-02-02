import React from 'react';
import { Search, BookOpen, User, MessageSquare } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-sky-400" />
            <span className="ml-2 text-xl font-bold text-gray-900">BookHalf</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by title, author, or ISBN..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full hover:bg-yellow-500 transition font-medium">
              Sell a Book
            </button>
            <MessageSquare className="h-6 w-6 text-gray-600 cursor-pointer hover:text-sky-400" />
            <User className="h-6 w-6 text-gray-600 cursor-pointer hover:text-sky-400" />
          </div>
        </div>
      </div>
    </nav>
  );
}