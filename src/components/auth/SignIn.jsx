import React, { useState } from "react";
import { auth } from "../../services/apis/books/apiBookServices";
import { Form, ConnectOrRegister, Label, Input } from "../../utils/styles/auth";
import { Button, Container, StyledLink } from "../../utils/styles/GlobalStyle";

export default function SignIn(props) {
  const { handleLoginSuccess } = props;

  const [email, setEmail] = useState("admin@test.com");
  const [password, setPassword] = useState("password");

  function handleSubmit(e) {
    e.preventDefault();
    auth.login(email, password).then((data) => {
      if (data.token) {
        handleLoginSuccess(data.token);
      }
    });
  }

  return (
    <Container>
      <h1>
        Pour consulter les livres disponibles,
        <br /> connectez-vous !
      </h1>

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
    </Container>
  );
}
