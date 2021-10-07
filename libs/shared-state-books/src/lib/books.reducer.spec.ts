import { BookModel } from '@book-co/shared-models';
import { BooksPageActions, BooksApiActions } from '@book-co/books-page/actions';
import {
  reducer,
  initialState,
  selectAll,
  selectActiveBook,
} from './books.reducer';

describe('Books Reducer', () => {
  const mockBook: BookModel = {
    id: 'mock-book-id',
    name: 'Mock Book',
    earnings: '10000000',
  };

  it('should add a book to the collection when a book is created with the API', () => {});

  it('should store which book is actively selected', () => {});

  it('should clear the active book when the user re-enters the books page', () => {});

  it('should remove a book from the collection when it is deleted with the API', () => {});
});
