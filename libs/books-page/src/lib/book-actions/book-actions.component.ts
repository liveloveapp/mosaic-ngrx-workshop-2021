import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bco-book-actions',
  templateUrl: './book-actions.component.html',
  styleUrls: ['./book-actions.component.scss'],
})
export class BookActionsComponent {
  @Input() isOnSmallDevice: boolean | null = false;
  @Output() delete = new EventEmitter();
  @Output() select = new EventEmitter();
}
