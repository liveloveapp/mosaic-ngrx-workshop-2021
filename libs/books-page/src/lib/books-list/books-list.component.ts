import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '@book-co/shared-models';
import { BooksListStore } from './books-list.store';

@Component({
  selector: 'bco-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  providers: [BooksListStore],
})
export class BooksListComponent {
  constructor(readonly booksListStore: BooksListStore) {}
}
