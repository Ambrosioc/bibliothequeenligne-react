import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const NavButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #f2f2f2;
  }
`;
export default function Navbar() {
  return (
    <NavbarContainer>
      <nav>
        <NavUl>
          <NavLi>
            <Link to={"/"}>Accueil</Link>
          </NavLi>
          <NavLi>
            <Link to={"/bookslist"}>Les Livres</Link>
          </NavLi>
          <NavLi>
            <Link to={"/about"}>À Propos</Link>
          </NavLi>
        </NavUl>
      </nav>
      <NavButton onClick={() => alert("Site pas encore operationnel")}>
        Connexion
      </NavButton>
    </NavbarContainer>
  );
}
