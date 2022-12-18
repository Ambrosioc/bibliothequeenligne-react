const FRONT_URL = "https://book-api-projet-fin.herokuapp.com/api";

// Création et connexion d'un utilisateur
export const auth = {
  login: (email, password) => {
    return fetch(`${FRONT_URL}/login_check`, {
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
        localStorage.setItem("token", data.token);
        return data;
      });
  },
  register: (email, password) => {
    return fetch(`${FRONT_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    }).then((response) => response.json());
  },
};

// Récupération des livres
export const getLastBooks = () => {
  return fetch(`${FRONT_URL}/lastbooks`, {
    method: "GET",
  }).then((response) => response.json());
};

export const getAllBooks = () => {
  return fetch(`${FRONT_URL}/books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
};

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
