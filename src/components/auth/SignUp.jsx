import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/apis/books/apiBookServices";
import {
  validateEmail,
  validatePassword,
  verifyPassword,
} from "../../utils/security";
import { Form, Input, Label } from "../../utils/styles/auth";
import { Button, Container } from "../../utils/styles/GlobalStyle";

export default function SignUp() {
  const naviagte = useNavigate();

  const [lastName, setLastName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(lastName, firstname, email, password, confirmPassword, date);
    auth.register(lastName, firstname, email, password, date).then((data) => {
      if (data.status) {
        alert("Vous êtes inscrit, connectez-vous !");
        console.log(data);
        naviagte("/sign-in");
      }
    });
  }

  return (
    <Container>
      <h1>Inscription</h1>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="lastname">Nom</Label>
        <Input
          id="lastname"
          type="text"
          placeholder="Nom"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          required
        />
        <Label htmlFor="firstname">Prénom</Label>
        <Input
          id="firstname"
          type="text"
          placeholder="Prénom"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          required
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(email);
          }}
          required
        />
        <Label htmlFor="password">Mot de passe</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(password);
          }}
          required
        />
        <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
        <Input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            verifyPassword();
          }}
          required
        />
        <Label htmlFor="date">Date de naissance</Label>
        <Input
          type="date"
          id="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <div style={styles.checkboxContainer}>
          <input type="checkbox" value="1" style={styles.checkbox} required />
          <p htmlFor="checkbox" style={styles.checkboxContainer.p}>
            J'accepte les conditions générales d'utilisation et la politique de
            confidentialité de Bibliotheque en ligne
          </p>
        </div>
        <Button type="submit">S'inscrire</Button>
      </Form>
      <div>
        <p>
          Vous avez déjà un compte ? <Link to="/sign-in">Se connecter</Link>
        </p>
      </div>
    </Container>
  );
}

const styles = {
  checkboxContainer: {
    display: "flex",
    alignItems: "space-between",
    p: {
      marginLeft: "1%",
    },
  },
};
