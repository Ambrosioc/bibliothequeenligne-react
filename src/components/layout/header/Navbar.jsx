import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <LayoutContainer>
      <nav style={styles.nav}>
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
          {token ? (
            <LayoutLi>
              <LayoutLinks to={"/admin"}>Mon Compte</LayoutLinks>
            </LayoutLi>
          ) : null}
        </LayoutUl>
      </nav>
      <div>
        {token ? (
          <LayoutButton
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Se déconnecter
          </LayoutButton>
        ) : (
          <LayoutButton onClick={() => navigate("/sign-in")}>
            Se connecter
          </LayoutButton>
        )}
        <LayoutButton onClick={() => toggoleTheme()}>
          Dark Mode :{theme === "light" ? "☀️" : "🌙"}
        </LayoutButton>
      </div>
    </LayoutContainer>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
  },
};
