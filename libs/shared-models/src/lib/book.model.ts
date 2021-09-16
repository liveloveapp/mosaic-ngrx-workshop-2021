export interface BookModel {
  id: string;
  name: string;
  earnings: string;
  description?: string;
}

export type BookRequiredProps = Pick<BookModel, 'name' | 'earnings'>;
export type BookSortOrder = 'asc' | 'dsc';
export type BookSortProp = 'name' | 'earnings';

export function calculateBooksGrossEarnings(books: BookModel[]) {
  return books.reduce((total, book) => {
    return total + parseInt(`${book.earnings}`, 10) || 0;
  }, 0);
}

export function sortBooks(
  order: BookSortOrder,
  prop: BookSortProp,
  books: BookModel[]
): BookModel[] {
  const direction = order === 'asc' ? 1 : -1;

  if (prop === 'name') {
    return books.sort((a, b) => direction * a.name.localeCompare(b.name));
  }

  return books.sort((a, b) => {
    return direction * (parseFloat(b.earnings) - parseFloat(a.earnings));
  });
}
