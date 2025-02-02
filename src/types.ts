export interface Book {
  id: string;
  title: string;
  author: string;
  originalPrice: number;
  sellingPrice: number;
  condition: 'Like New' | 'Very Good' | 'Good' | 'Fair';
  genre: string;
  description: string;
  imageUrl: string;
  isbn?: string;
  language: string;
  sellerId: string;
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  booksListed: number;
  booksSold: number;
  joinedDate: Date;
}