interface Book {
  title: string;
  author: string;
  libraryId: number;
}

const book1: Book = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryId: 3353,
};

const { title, author, libraryId } = book1;
console.log(
  `The title of the book is ${title} the author is ${author}, and the library id is ${libraryId}`
);

const book2: Book = {
  title: 'Les Fleurs du mal',
  author: 'Charles Baudekaure',
  libraryId: 2345,
};

const {
  title: book2Title,
  author: book2Author,
  libraryId: book2LibraryId,
} = book2;

console.log(
  `The title of the book is ${book2Title} the author is ${book2Author}, and the library id is ${book2LibraryId}`
);

const library: Book[] = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245,
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233,
  },
];

const [book3, book4, book5] = library;
console.log('book 3:', book3, 'book 4:', book4, 'book 5:', book5);
