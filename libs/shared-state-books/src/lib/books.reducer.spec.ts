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

  it('should add a book to the collection when a book is created with the API', () => {
    const inputAction = BooksApiActions.bookCreated({ book: mockBook });

    const state = reducer(initialState, inputAction);
    const books = selectAll(state);

    expect(books).toEqual([mockBook]);
  });

  it('should store which book is actively selected', () => {
    const firstAction = BooksApiActions.bookCreated({ book: mockBook });
    const secondAction = BooksPageActions.selectBook({ bookId: mockBook.id });

    const state = [firstAction, secondAction].reduce(reducer, initialState);
    const activeBook = selectActiveBook(state);

    expect(activeBook).toBe(mockBook);
  });

  it('should clear the active book when the user re-enters the books page', () => {
    const firstAction = BooksApiActions.bookCreated({ book: mockBook });
    const secondAction = BooksPageActions.selectBook({ bookId: mockBook.id });
    const thirdAction = BooksPageActions.enter();

    const state = [firstAction, secondAction, thirdAction].reduce(
      reducer,
      initialState
    );
    const activeBook = selectActiveBook(state);

    expect(activeBook).toBeNull();
  });

  it('should remove a book from the collection when it is deleted with the API', () => {
    const firstAction = BooksApiActions.bookCreated({ book: mockBook });
    const secondAction = BooksApiActions.bookDeleted({ bookId: mockBook.id });

    const state = [firstAction, secondAction].reduce(reducer, initialState);
    const books = selectAll(state);

    expect(books).toEqual([]);
  });
});
