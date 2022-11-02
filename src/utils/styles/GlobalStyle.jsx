import React, { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../context";

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

export default function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
}
