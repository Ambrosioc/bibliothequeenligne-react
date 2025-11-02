import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../utils/context";
import { colors } from "../../../utils/styles/GlobalStyle";
import {
  LayoutButton,
  LayoutContainer,
  LayoutLi,
  LayoutLinks,
  LayoutUl,
} from "../../../utils/styles/layout";
import logo from "../../../asset/logo.png";
import "./nav.css";
import { Avatar, Menu, MenuItem, ListItemIcon, ListItemText, Divider, Button } from "@mui/material";
import {
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  AccountCircle as AccountIcon,
} from "@mui/icons-material";
import { jwtDecode } from "jwt-decode";
import styled from "styled-components";

const StyledLoginButton = styled(Button)`
  && {
    background: transparent;
    color: ${colors.primary};
    border: 1.5px solid ${colors.primary};
    padding: 0.45rem 1rem;
    border-radius: 6px;
    font-weight: 500;
    font-size: 0.875rem;
    text-transform: none;
    transition: all 0.2s ease;
    font-family: 'Inter', sans-serif;
    min-width: auto;
    
    &:hover {
      background: ${colors.primary};
      color: ${colors.textLight};
      border-color: ${colors.primary};
    }
  }
`;

export default function Navbar() {
  const { theme, toggoleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Récupérer les informations utilisateur depuis le token
  const getUserInfo = () => {
    if (!token) return null;
    try {
      const decoded = jwtDecode(token);
      return {
        email: decoded.username || decoded.email || "user@example.com",
        name: decoded.firstname || decoded.firstName || decoded.name || "User",
      };
    } catch (error) {
      return {
        email: "user@example.com",
        name: "User",
      };
    }
  };

  const userInfo = token ? getUserInfo() : null;
  const userInitial = userInfo?.name?.charAt(0)?.toUpperCase() || userInfo?.email?.charAt(0)?.toUpperCase() || "U";

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    handleMenuClose();
    navigate("/");
  };

  const handleToggleTheme = () => {
    toggoleTheme();
    handleMenuClose();
  };

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
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
          <LayoutUl>
            <LayoutLi>
              <LayoutLinks to={"/bookslist"}>Les Livres</LayoutLinks>
            </LayoutLi>
            <LayoutLi>
              <LayoutLinks to={"/"}>Catégories</LayoutLinks>
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
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {token ? (
            <>
              <Avatar
                sx={{
                  bgcolor: colors.secondary,
                  color: colors.textLight,
                  cursor: "pointer",
                  width: 40,
                  height: 40,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: `0 4px 12px ${colors.shadowMedium}`,
                  },
                }}
                onClick={handleAvatarClick}
              >
                {userInitial}
              </Avatar>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    minWidth: 220,
                    borderRadius: 2,
                    boxShadow: `0 4px 20px ${colors.shadowStrong}`,
                    border: `1px solid ${colors.borderLight}`,
                    "& .MuiMenuItem-root": {
                      px: 2,
                      py: 1.5,
                      "&:hover": {
                        backgroundColor: colors.backgroundLight,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem disabled>
                  <ListItemIcon>
                    <AccountIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>
                    <div>
                      <div style={{ fontWeight: 600, color: colors.textPrimary }}>
                        {userInfo?.name || "Utilisateur"}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: colors.textSecondary }}>
                        {userInfo?.email || ""}
                      </div>
                    </div>
                  </ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => { navigate("/user"); handleMenuClose(); }}>
                  <ListItemIcon>
                    <SettingsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paramètres</ListItemText>
                </MenuItem>
                <MenuItem onClick={handleToggleTheme}>
                  <ListItemIcon>
                    {theme === "light" ? (
                      <DarkModeIcon fontSize="small" />
                    ) : (
                      <LightModeIcon fontSize="small" />
                    )}
                  </ListItemIcon>
                  <ListItemText>
                    {theme === "light" ? "Mode sombre" : "Mode clair"}
                  </ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" sx={{ color: "#dc2626" }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "#dc2626" }}>
                    Se déconnecter
                  </ListItemText>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <StyledLoginButton
              variant="outlined"
              onClick={() => navigate("/sign-in")}
            >
              Se connecter
            </StyledLoginButton>
          )}
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
                  <>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                      <Avatar
                        sx={{
                          bgcolor: colors.secondary,
                          color: colors.textLight,
                          width: 40,
                          height: 40,
                          fontSize: "1.1rem",
                          fontWeight: 600,
                        }}
                      >
                        {userInitial}
                      </Avatar>
                      <div>
                        <div style={{ fontWeight: 600, color: colors.textPrimary }}>
                          {userInfo?.name || "Utilisateur"}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: colors.textSecondary }}>
                          {userInfo?.email || ""}
                        </div>
                      </div>
                    </div>
                    <button
                      style={styles.btnDisconnect}
                      onClick={() => {
                        sessionStorage.removeItem("token");
                        navigate("/");
                      }}
                    >
                      Se déconnecter
                    </button>
                    <button
                      style={styles.btnDisconnect}
                      onClick={() => {
                        navigate("/user");
                        showResponsiveMenu();
                      }}
                    >
                      Paramètres
                    </button>
                    <button onClick={() => toggoleTheme()}>
                      {theme === "light" ? "🌙 Mode sombre" : "☀️ Mode clair"}
                    </button>
                  </>
                ) : (
                  <StyledLoginButton
                    variant="outlined"
                    onClick={() => {
                      navigate("/sign-in");
                      showResponsiveMenu();
                    }}
                    sx={{
                      width: "100%",
                      margin: "0.5rem 0",
                    }}
                  >
                    Se connecter
                  </StyledLoginButton>
                )}
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
    gap: "2rem",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  },
  btnDisconnect: {
    margin: "10px",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    border: "none",
    background: colors.tertiary,
    color: colors.textLight,
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};
