class Book {
  title: string;
  author: string;
  yearPublished?: number;
  readonly ISBN: string;

  constructor(
    title: string,
    author: string,
    ISBN: string,
    yearPublished?: number
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    if (yearPublished) {
      this.yearPublished = yearPublished;
    }
  }
}

const firstBook = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "9780743273565",
  1925
);
const secondBook = new Book("1984", "George Orwell", "9780451524935");

function logBookDetails(book: Book): void {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`ISBN: ${book.ISBN}`);
  if (book.yearPublished) {
    console.log(`Year Published: ${book.yearPublished}`);
  }
}

class Ebook extends Book {
  fileSize: number;
  format: string;

  constructor(
    title: string,
    author: string,
    ISBN: string,
    fileSize: number,
    format: string,
    yearPublished?: number
  ) {
    super(title, author, ISBN, yearPublished);
    this.fileSize = fileSize;
    this.format = format;
  }
}

const ebook = new Ebook(
  "Digital Fortress",
  "Dan Brown",
  "9781429902304",
  2.5,
  "PDF",
  1998
);
