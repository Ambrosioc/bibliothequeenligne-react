import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../context";
import backgroundimg from "../../asset/img/pexels-keira-burton-6147369.jpg";

const StyledGlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto';
        background-color: #f2f2f2;
           background-color: ${({ isDarkMode }) =>
             isDarkMode ? "#2F2E41" : "#f2f2f2;"};

    }

    h1 {
        font-size: 2rem;
        font-weight: 700;
        margin: 1rem 0;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 1rem 0;

        @media (max-width: 768px) {
            font-size: 1.2rem;
        }
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 700;


        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }


`;

export const SignInSignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  background-image: url(${backgroundimg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export default function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
}
