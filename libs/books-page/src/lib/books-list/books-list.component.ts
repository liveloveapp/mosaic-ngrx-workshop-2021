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
  @Input() books: BookModel[] | null = [];
  @Output() select = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor(readonly booksListStore: BooksListStore) {}
}
