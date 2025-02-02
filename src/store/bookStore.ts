import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { Book } from '../types';

interface BookState {
  books: Book[];
  isLoading: boolean;
  fetchBooks: () => Promise<void>;
  addBook: (book: Omit<Book, 'id' | 'createdAt'>) => Promise<void>;
  toggleFavorite: (bookId: string) => Promise<void>;
}

export const useBookStore = create<BookState>((set, get) => ({
  books: [],
  isLoading: false,

  fetchBooks: async () => {
    try {
      set({ isLoading: true });
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ books: data });
    } finally {
      set({ isLoading: false });
    }
  },

  addBook: async (book) => {
    const { data, error } = await supabase
      .from('books')
      .insert([book])
      .select()
      .single();

    if (error) throw error;
    set({ books: [...get().books, data] });
  },

  toggleFavorite: async (bookId) => {
    const { data: existing } = await supabase
      .from('favorites')
      .select('*')
      .eq('book_id', bookId)
      .single();

    if (existing) {
      await supabase
        .from('favorites')
        .delete()
        .eq('book_id', bookId);
    } else {
      await supabase
        .from('favorites')
        .insert([{ book_id: bookId }]);
    }
  },
}));