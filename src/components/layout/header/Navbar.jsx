import React, { useContext } from "react";
import { ThemeContext } from "../../../utils/context";
import {
  LayoutButton,
  LayoutContainer,
  LayoutLi,
  LayoutLinks,
  LayoutUl,
} from "../../../utils/styles/layout";

export default function Navbar() {
  const { theme, toggoleTheme } = useContext(ThemeContext);
  return (
    <LayoutContainer>
      <nav>
        <LayoutUl>
          <LayoutLi>
            <LayoutLinks to={"/"}>Accueil</LayoutLinks>
          </LayoutLi>
          <LayoutLi>
            <LayoutLinks to={"/bookslist"}>Les Livres</LayoutLinks>
          </LayoutLi>
          <LayoutLi>
            <LayoutLinks to={"/about"}>À Propos</LayoutLinks>
          </LayoutLi>
        </LayoutUl>
      </nav>
      <div>
        <LayoutButton onClick={() => toggoleTheme()}>
          Dark Mode :{theme === "light" ? "☀️" : "🌙"}
        </LayoutButton>
        <LayoutLinks to={"/sign-in"}>Connexion</LayoutLinks>
      </div>
    </LayoutContainer>
  );
}
