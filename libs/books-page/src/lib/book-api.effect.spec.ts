import { TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { Observable, of, throwError } from 'rxjs';
import { BooksService } from '@book-co/shared-services';
import { BookModel } from '@book-co/shared-models';
import { BooksApiActions, BooksPageActions } from '@book-co/books-page/actions';
import { BooksApiEffects } from './book-api.effects';

describe('Book API Effects', () => {
  let effects: BooksApiEffects;
  let booksService: { all: jest.Mock };

  const mockBook: BookModel = {
    id: 'mock-book-id',
    name: 'Mock Book',
    earnings: '10000000',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BooksApiEffects,
        {
          provide: BooksService,
          useFactory() {
            return { all: jest.fn() };
          },
        },
      ],
    });

    effects = TestBed.inject(BooksApiEffects);
    booksService = TestBed.inject(BooksService) as any;
  });

  it('should handle loading all of the books when the user enters the books page', () => {});

  it('should handle errors when trying to load all of the books', () => {});
});
