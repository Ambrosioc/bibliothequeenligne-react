import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../context";

export const colors = {
  primary: "#f9f9fc", // Colors for the background
  secondary: "#8186a0", // Colors for the text
  tertiary: "#5843E4", // Colors for the buttons
};

const StyledGlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Comfortaa', cursive;
        color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};

    }

    body {
           background-color: ${({ isDarkMode }) =>
             isDarkMode ? "#2F2E41" : "#f9f9fc;"};
}
`;

export const Container = styled.div`
  width: 100%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#5843E4" : "#5843E4")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#f9f9fc" : "#f9f9fc")};
  border: none;
  border-radius: 6px;
  padding: 12px 41px 12px 42px;
  margin-bottom: 3%;
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#5843E4" : "#5843E4"};
    color: ${({ isDarkMode }) => (isDarkMode ? "#f9f9fc" : "#f9f9fc")};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export default function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
}
