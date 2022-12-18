import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Form, Input, Label } from "../../utils/styles/auth";
import { Button, Container } from "../../utils/styles/GlobalStyle";

export default function SignUp() {
  return (
    <Container>
      <h1>Inscription</h1>
      <Form>
        <Label htmlFor="name">Nom</Label>
        <Input type="text" placeholder="Nom" required />
        <Label htmlFor="firstname">Prénom</Label>
        <Input type="text" placeholder="Prénom" required />
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" required />
        <Label htmlFor="password">Mot de passe</Label>
        <Input type="password" id="password" required />
        <Label htmlFor="password">Confirmer le mot de passe</Label>
        <Input type="password" id="password" required />
        <Label htmlFor="date">Date de naissance</Label>
        <Input type="date" id="date" />
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
