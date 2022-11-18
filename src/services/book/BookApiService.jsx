const FRONT_PATH = "http://localhost:8080/api/books";
const BACK_PATH = "http://localhost:8081/api/books";

export class BookApiService {
  static lastBooks() {
    return fetch("https://book-api-projet-fin.herokuapp.com/api/lastbooks")
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
}
