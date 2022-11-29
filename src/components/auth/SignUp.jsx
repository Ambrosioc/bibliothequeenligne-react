import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Background,
  BackgroundContent,
  BackgroundGap,
  Form,
  Input,
  Label,
  Title,
} from "../../utils/styles/auth";
import { Button, Container } from "../../utils/styles/GlobalStyle";

const TitleSignUp = styled.h1`
  width: 36%;
  height: 14%;
  font-size: 3em;
  @media (max-width: 768px) {
    width: 100%;
    height: 20%;
    font-size: 2em;
  }
`;

const FormSignUp = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 35%;
  }
`;

export default function SignUp() {
  return (
    <Background>
      <BackgroundGap />
      <BackgroundContent>
        <TitleSignUp>Inscription</TitleSignUp>
        <FormSignUp>
          <Label htmlFor="name">Nom</Label>
          <Input type="text" placeholder="Nom" />
          <Label htmlFor="firstname">Prénom</Label>
          <Input type="text" placeholder="Prénom" />
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" />
          <Label htmlFor="password">Mot de passe</Label>
          <Input type="password" id="password" />
          <Label htmlFor="password">Confirmer le mot de passe</Label>
          <Input type="password" id="password" />
          <Button type="submit">S'inscrire</Button>
          <Label htmlFor="date">Date de naissance</Label>
          <Input type="date" id="date" />
          <div style={styles.checkboxContainer}>
            <input type="checkbox" style={styles.checkbox} />
            <p htmlFor="checkbox">
              J'accepte les conditions générales d'utilisation et la politique
              de confidentialité de Bibliotheque en ligne
            </p>
          </div>
        </FormSignUp>
        <div>
          <p>
            Vous avez déjà un compte ? <Link to="/sign-in">Se connecter</Link>
          </p>
        </div>
      </BackgroundContent>
    </Background>
  );
}

const styles = {
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
    backgroundColor: "red",
    width: "100%",
  },
};
