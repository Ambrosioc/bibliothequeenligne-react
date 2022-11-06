import React from "react";
import styled from "styled-components";
import {
  SignInSignUpContainer,
  StyledLink,
} from "../../utils/styles/GlobalStyle";

const SignInBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  width: 50%;
  padding: 0 20px;
`;

const SignInBackgroundContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px 0px 0px 30px;
`;

const SignInTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SignInTitle = styled.h1`
  margin: 0 108px 23px 143px;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 108px 23px 143px;
`;

const SignInLabel = styled.label`
  height: 23px;
  left: 889px;
  top: 230px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  color: #000000;
`;

const SignInInput = styled.input`
  width: 443px;
  height: 45px;
  left: 889px;
  top: 460px;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

const SignInButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  padding: 12px 41px 12px 42px;
  gap: 10px;

  width: 443px;
  height: 48px;
  left: 889px;
  top: 572px;

  background: #ff6334;
  border-radius: 6px;
`;

export default function SignIn() {
  return (
    <SignInSignUpContainer>
      <SignInBackground></SignInBackground>
      <SignInBackgroundContent>
        <SignInTitleContainer>
          <SignInTitle>
            Connectez vous a votre éspace pour voir tout les livres disponible
          </SignInTitle>
        </SignInTitleContainer>
        <SignInForm action="">
          <SignInLabel htmlFor="email">Email</SignInLabel>
          <SignInInput type="email" name="email" id="email" />
          <SignInLabel htmlFor="password">Mot de passe</SignInLabel>
          <SignInInput type="password" name="password" id="password" />
          <SignInButton type="submit">Connexion</SignInButton>
        </SignInForm>
        <div>
          <p>
            Vous avez pas de compte ?{" "}
            <StyledLink to={"/sign-up"}>Créer le</StyledLink>
          </p>
        </div>
      </SignInBackgroundContent>
    </SignInSignUpContainer>
  );
}