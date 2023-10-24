const dataBook = [
  {"id":1, "title":"Book 1", "author":"Author 1", "price": 500},
  {"id":5, "title":"Book 2", "author":"Author 2", "price": 1200},
  {"id":6, "title":"Book 3", "author":"Author 3", "price": 900},
  {"id":7, "title":"Koob 4", "author":"Rohtua 4", "price": 1}
];

export default dataBook;

export const getBook = idbook => (
  dataBook.find(book => book.id == idbook)
);
