import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../../../utils/context";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const NavUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  align-items: center;
`;

const NavLi = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const NavLinks = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  font-weight: 500;
`;

const NavButton = styled.button`
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #f2f2f2;
  }
`;
export default function Navbar() {
  const { theme, toggoleTheme } = useContext(ThemeContext);
  return (
    <NavbarContainer>
      <nav>
        <NavUl>
          <NavLi>
            <NavLinks to={"/"}>Accueil</NavLinks>
          </NavLi>
          <NavLi>
            <NavLinks to={"/bookslist"}>Les Livres</NavLinks>
          </NavLi>
          <NavLi>
            <NavLinks to={"/about"}>À Propos</NavLinks>
          </NavLi>
        </NavUl>
      </nav>
      <div>
        <NavButton onClick={() => toggoleTheme()}>
          Dark Mode :{theme === "light" ? "☀️" : "🌙"}
        </NavButton>
        <NavLinks to={"/sign-in"}>Connexion</NavLinks>
      </div>
    </NavbarContainer>
  );
}
