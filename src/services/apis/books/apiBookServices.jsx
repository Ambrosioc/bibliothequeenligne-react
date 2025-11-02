// Configuration de l'URL de l'API
// En production, utilisez l'URL HTTPS de votre serveur
// const FRONT_URL = "https://book-api-projet-fin.herokuapp.com/api";
// En développement local, utiliser 127.0.0.1 avec HTTPS
const FRONT_URL = process.env.NODE_ENV === 'production' 
  ? "https://book-api-projet-fin.herokuapp.com/api"
  : "https://127.0.0.1:8000/api"; // Utiliser 127.0.0.1 avec HTTPS pour éviter les redirections 307

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
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur de connexion");
        }
        return response.json();
      })
      .then((data) => {
        if (data.token) {
          sessionStorage.setItem("token", data.token);
        }
        return data;
      });
  },
  register: (lastName, firstName, email, password, date) => {
    return fetch(`${FRONT_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lastname: lastName,
        firstname: firstName,
        email: email,
        password: password,
        date: date,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(err.message || "Erreur lors de l'inscription");
          });
        }
        return response.json();
      });
  },
};

// Récupération des livres
export const getLastBooks = () => {
  // S'assurer qu'il n'y a pas de double slash et pas de trailing slash
  const baseUrl = FRONT_URL.endsWith('/') ? FRONT_URL.slice(0, -1) : FRONT_URL;
  return `${baseUrl}/lastbooks`;
};

export const getAllBooks = () => {
  // S'assurer qu'il n'y a pas de double slash et pas de trailing slash
  const baseUrl = FRONT_URL.endsWith('/') ? FRONT_URL.slice(0, -1) : FRONT_URL;
  return `${baseUrl}/books`;
};

export function getBookById(id) {
  // S'assurer qu'il n'y a pas de double slash et pas de trailing slash
  const baseUrl = FRONT_URL.endsWith('/') ? FRONT_URL.slice(0, -1) : FRONT_URL;
  return `${baseUrl}/books/${id}`;
}

// Fonction pour créer un livre
export function createBook(bookData) {
  const token = sessionStorage.getItem("token");
  
  return fetch(`${FRONT_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: bookData.title,
      coverText: bookData.coverText || "",
      coverImage: bookData.coverImage || "",
      dateAt: bookData.dateAt || new Date().toISOString().split('T')[0],
      idAuthor: bookData.idAuthor,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.message || "Erreur lors de la création du livre");
        });
      }
      return response.json();
    });
}

// Fonction pour mettre à jour un livre
export function updateBook(id, bookData) {
  const token = sessionStorage.getItem("token");
  
  return fetch(`${FRONT_URL}/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: bookData.title,
      coverText: bookData.coverText || "",
      coverImage: bookData.coverImage || "",
      dateAt: bookData.dateAt || new Date().toISOString().split('T')[0],
      idAuthor: bookData.idAuthor,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.message || "Erreur lors de la mise à jour du livre");
        });
      }
      // PUT retourne HTTP_NO_CONTENT (204) donc pas de JSON
      if (response.status === 204) {
        return { success: true };
      }
      return response.json();
    });
}

// Fonction pour supprimer un livre
export function deleteBook(id) {
  const token = sessionStorage.getItem("token");
  
  return fetch(`${FRONT_URL}/books/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        return response.json().then(err => {
          throw new Error(err.message || "Erreur lors de la suppression du livre");
        }).catch(() => {
          throw new Error("Erreur lors de la suppression du livre");
        });
      }
      // DELETE retourne HTTP_NO_CONTENT (204) donc pas de JSON
      return { success: true };
    });
}

// Fonctions de recherche (si elles existent dans votre API)
export function getBookByTitle(title) {
  return `${FRONT_URL}/books/search/${title}`;
}

export function getBookByAuthor(author) {
  return `${FRONT_URL}/books/search/${author}`;
}

export function getBookByCategory(category) {
  return `${FRONT_URL}/books/search/${category}`;
}

export function getBookByYear(year) {
  return `${FRONT_URL}/books/search/${year}`;
}
