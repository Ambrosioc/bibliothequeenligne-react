const FRONT_URL = "https://book-api-projet-fin.herokuapp.com/api";

export function getAllBooks() {
  return FRONT_URL + "/books";
}

export function getBookById(id) {
  return FRONT_URL + `/books/${id}`;
}

export function getBookByTitle(title) {
  return FRONT_URL + `/books/search/${title}`;
}

export function getBookByAuthor(author) {
  return FRONT_URL + `/books/search/${author}`;
}

export function getBookByCategory(category) {
  return FRONT_URL + `/books/search/${category}`;
}

export function getBookByYear(year) {
  return FRONT_URL + `/books/search/${year}`;
}
