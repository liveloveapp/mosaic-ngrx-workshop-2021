import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { BookModel } from '@book-co/shared-models';
import { BooksPageActions } from '@book-co/books-page/actions';
import { selectActiveBook, selectAllBooks } from '@book-co/shared-state-books';
import { BooksPageComponent } from './books-page.component';

describe('Books Page Component', () => {
  let fixture: ComponentFixture<BooksPageComponent>;
  let mockStore: MockStore;

  const mockBook: BookModel = {
    id: 'mock-book-id',
    name: 'Mock Book',
    earnings: '10000000',
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [BooksPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [],
    });

    await TestBed.compileComponents();

    fixture = TestBed.createComponent(BooksPageComponent);
  });

  it('should pass the active book to the book detail component', () => {});

  it('should bind the list of books to the books list component', () => {});

  it('should emit a "select book" action when the user selects a book using the books list component', () => {});

  it('should dispatch a "clear selected book" action when the user hits cancel on the book detail component', () => {});
});
