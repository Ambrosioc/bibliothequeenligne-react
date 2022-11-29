import React, { useState } from "react";
import styled from "styled-components";
import {
  Background,
  BackgroundContent,
  BackgroundGap,
  Title,
  Form,
  ConnectOrRegister,
  Label,
  Input,
} from "../../utils/styles/auth";
import { Button, StyledLink } from "../../utils/styles/GlobalStyle";

export default function SignIn(props) {
  const { handleLoginSuccess } = props;

  const [email, setEmail] = useState("admin@test.com");
  const [password, setPassword] = useState("password");
  const [data, setData] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    async function login(email, password) {
      const response = await fetch(
        "https://book-api-projet-fin.herokuapp.com/api/login_check",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password: password,
          }),
        }
      );
      const data = await response.json();
      setData(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        handleLoginSuccess();
      }
    }
    login(email, password);
  }

  return (
    <Background>
      <BackgroundGap />
      <BackgroundContent>
        <Title>
          Pour consulter les livres disponibles,
          <br /> connectez-vous !
        </Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type="submit">Connexion</Button>
        </Form>
        <ConnectOrRegister>
          <p>
            Vous avez pas de compte ?{" "}
            <StyledLink to="/sign-up">Inscrivez vous</StyledLink>
          </p>
        </ConnectOrRegister>
      </BackgroundContent>
    </Background>
  );
}
