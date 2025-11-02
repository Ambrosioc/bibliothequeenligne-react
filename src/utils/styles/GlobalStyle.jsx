import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../context";

export const colors = {
  // Couleurs principales - thème bibliothèque
  primary: "#8B4513", // Marron cuir pour les accents
  secondary: "#D4AF37", // Or pour les éléments importants
  tertiary: "#2C5530", // Vert forest pour les boutons
  accent: "#1E3A8A", // Bleu profond pour les liens
  
  // Arrière-plans
  backgroundLight: "#FEFCF9", // Crème très clair
  backgroundCard: "#FFF8F0", // Blanc cassé pour les cartes
  backgroundDark: "#2D2416", // Marron foncé pour dark mode
  
  // Textes
  textPrimary: "#2C2415", // Marron foncé pour texte principal
  textSecondary: "#6B5B4A", // Marron moyen pour texte secondaire
  textLight: "#FEFCF9", // Crème pour texte sur fond foncé
  
  // Ombres et bordures
  shadowLight: "rgba(44, 37, 21, 0.08)",
  shadowMedium: "rgba(44, 37, 21, 0.15)",
  shadowStrong: "rgba(44, 37, 21, 0.25)",
  borderLight: "#E8E0D4",
};

const StyledGlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? colors.backgroundDark : colors.backgroundLight};
        color: ${({ isDarkMode }) =>
          isDarkMode ? colors.textLight : colors.textPrimary};
        line-height: 1.6;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Playfair Display', 'Crimson Text', serif;
        font-weight: 600;
        line-height: 1.2;
        color: ${({ isDarkMode }) =>
          isDarkMode ? colors.textLight : colors.textPrimary};
        margin-bottom: 1rem;
    }

    h1 {
        font-size: clamp(2rem, 5vw, 3.5rem);
        font-weight: 700;
        letter-spacing: -0.02em;
    }

    h2 {
        font-size: clamp(1.75rem, 4vw, 2.5rem);
        font-weight: 600;
    }

    h3 {
        font-size: clamp(1.5rem, 3vw, 2rem);
        font-weight: 600;
    }

    p {
        font-size: 1.125rem;
        line-height: 1.8;
        color: ${({ isDarkMode }) =>
          isDarkMode ? "rgba(254, 252, 249, 0.85)" : colors.textSecondary};
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
    }

    input[type="text"]:focus,
    input[type="email"]:focus,
    input[type="password"]:focus,
    input[type="date"]:focus {
        outline: none;
        border-color: ${colors.tertiary} !important;
        box-shadow: 0 0 0 3px rgba(44, 85, 48, 0.1) !important;
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const Button = styled.button`
  background: linear-gradient(135deg, ${colors.tertiary} 0%, #3A6B40 100%);
  color: ${colors.textLight};
  border: none;
  border-radius: 12px;
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px 0 ${colors.shadowMedium};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px 0 ${colors.shadowStrong};
    background: linear-gradient(135deg, #3A6B40 0%, ${colors.tertiary} 100%);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px 0 ${colors.shadowMedium};
  }

  &:focus {
    outline: 2px solid ${colors.secondary};
    outline-offset: 2px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.accent};
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.primary};
    
    &::after {
      width: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${colors.secondary};
    transition: width 0.3s ease;
  }
`;

export default function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
}
