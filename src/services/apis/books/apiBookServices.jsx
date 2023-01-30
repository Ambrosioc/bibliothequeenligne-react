// const FRONT_URL = "https://book-api-projet-fin.herokuapp.com/api";
const TEST_URL = "http://localhost:8000/api";

// Création et connexion d'un utilisateur
export const auth = {
  login: (email, password) => {
    return fetch(`${TEST_URL}/login_check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        sessionStorage.setItem("token", data.token);
        return data;
      });
  },
  register: (lastName, firstName, email, password) => {
    return fetch(`${TEST_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lastname: lastName,
        firstname: firstName,
        email: email,
        password: password,
      }),
    }).then((response) => response.json());
  },
};

// Récupération des livres
export const getLastBooks = () => {
  return `${TEST_URL}/lastbooks`;
};

export const getAllBooks = () => {
  return `${TEST_URL}/books`;
};

export function getBookById(id) {
  return TEST_URL + `/books/${id}`;
}

export function getBookByTitle(title) {
  return TEST_URL + `/books/search/${title}`;
}

export function getBookByAuthor(author) {
  return TEST_URL + `/books/search/${author}`;
}

export function getBookByCategory(category) {
  return TEST_URL + `/books/search/${category}`;
}

export function getBookByYear(year) {
  return TEST_URL + `/books/search/${year}`;
}
