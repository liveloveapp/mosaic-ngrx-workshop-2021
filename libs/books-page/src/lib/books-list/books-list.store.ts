import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Store } from '@ngrx/store';
import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BooksPageActions } from '@book-co/books-page/actions';
import {
  BookModel,
  BookSortOrder,
  BookSortProp,
  sortBooks,
} from '@book-co/shared-models';
import { selectAllBooks } from '@book-co/shared-state-books';

interface State {
  sortOrder: BookSortOrder;
  sortProp: BookSortProp;
}

@Injectable()
export class BooksListStore extends ComponentStore<State> {
  sortOrder$ = this.select((state) => state.sortOrder);

  constructor(readonly store: Store, breakpointObserver: BreakpointObserver) {
    super({
      sortOrder: 'asc',
      sortProp: 'name',
    });
  }

  setSortOrder(order: BookSortOrder) {
    this.patchState({
      sortOrder: order,
    });
  }
}
