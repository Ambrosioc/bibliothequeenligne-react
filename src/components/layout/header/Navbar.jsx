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
import logo from "../../../asset/logo.png";
import "./nav.css";

export default function Navbar() {
  const { theme, toggoleTheme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function showResponsiveMenu() {
    let menu = document.getElementById("topnav_responsive_menu");
    let icon = document.getElementById("topnav_hamburger_icon");
    let root = document.getElementById("root");
    if (menu.className === "") {
      menu.className = "open";
      icon.className = "open";
      root.style.overflowY = "hidden";
    } else {
      menu.className = "";
      icon.className = "";
      root.style.overflowY = "";
    }
  }

  return (
    <>
      {/* <!-- Classic Menu --> */}
      <LayoutContainer>
        <nav style={styles.nav}>
          <img src={logo} alt="Logo" />
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
        <LayoutButton
          id="topnav_hamburger_icon"
          onClick={() => showResponsiveMenu()}
        >
          {/* <!-- Some spans to act as a hamburger --> */}
          <span></span>
          <span></span>
          <span></span>
        </LayoutButton>

        {/* <!-- Responsive Menu --> */}
        <nav role="navigation" id="topnav_responsive_menu">
          <ul>
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
            <LayoutLi>
              <div style={styles.btn}>
                {token ? (
                  <button
                    style={styles.btnDisconnect}
                    onClick={() => {
                      localStorage.removeItem("token");
                      navigate("/");
                    }}
                  >
                    Se déconnecter
                  </button>
                ) : (
                  <button
                    style={styles.btnDisconnect}
                    onClick={() => navigate("/sign-in")}
                  >
                    Se connecter
                  </button>
                )}
                <button onClick={() => toggoleTheme()}>
                  Dark Mode :{theme === "light" ? "☀️" : "🌙"}
                </button>
              </div>
            </LayoutLi>
          </ul>
        </nav>
      </LayoutContainer>
    </>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  btnDisconnect: {
    margin: "10px",
  },
};
