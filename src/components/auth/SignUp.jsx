import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form, Input, Label } from "../../utils/styles/auth";
import { Button, Container } from "../../utils/styles/GlobalStyle";

export default function SignUp() {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [date, setDate] = useState("");

  function verifyPassword() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity(
        "Les mots de passe ne correspondent pas"
      );
    } else {
      confirmPassword.setCustomValidity("");
    }
  }

  return (
    <Container>
      <h1>Inscription</h1>
      <Form>
        <Label htmlFor="name">Nom</Label>
        <Input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <Label htmlFor="firstname">Prénom</Label>
        <Input
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
