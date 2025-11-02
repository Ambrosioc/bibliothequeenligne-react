import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../utils/styles/GlobalStyle";

const LayoutContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, ${colors.backgroundLight} 0%, #F5F0E8 100%);
  box-shadow: 0 -4px 20px ${colors.shadowLight};
  width: 100%;
  padding: 4rem 2rem 2rem;
  border-top: 1px solid ${colors.borderLight};
  margin-top: 4rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 1.5rem;
  }
`;

const FooterDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${colors.textPrimary};
    margin-bottom: 0.5rem;
    position: relative;
    padding-bottom: 0.75rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, ${colors.secondary}, ${colors.primary});
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    h3::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${colors.textSecondary};
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  transition: all 0.3s ease;
  padding: 0.25rem 0;

  &:hover {
    color: ${colors.primary};
    transform: translateX(4px);
    padding-left: 0.5rem;
  }

  @media (max-width: 768px) {
    &:hover {
      transform: none;
      padding-left: 0;
    }
  }
`;

const FooterText = styled.p`
  color: ${colors.textSecondary};
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0.5rem 0;
`;

const FooterBottom = styled.div`
  width: 100%;
  max-width: 1200px;
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid ${colors.borderLight};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 0.95rem;
    color: ${colors.textSecondary};
    margin: 0;
    line-height: 1.6;

    &:first-child {
      font-size: 1.1rem;
      color: ${colors.textPrimary};
      font-weight: 500;
    }
  }
`;

export default function Footer() {
  return (
    <LayoutContainerFooter>
      <FooterDiv>
        <FooterSection>
          <h3>Catégories</h3>
          <FooterLink to={"/"}>Mangas</FooterLink>
          <FooterLink to={"/"}>Roman</FooterLink>
          <FooterLink to={"/"}>BD</FooterLink>
          <FooterLink to={"/"}>Comics</FooterLink>
          <FooterLink to={"/"}>Autres</FooterLink>
        </FooterSection>
        <FooterSection>
          <h3>Utile</h3>
          <FooterText>Les liens utiles</FooterText>
        </FooterSection>
        <FooterSection>
          <h3>Contact</h3>
          <FooterText>0668965739</FooterText>
          <FooterText>Mail</FooterText>
        </FooterSection>
      </FooterDiv>
      <FooterBottom>
        <p>📚 Projet d'étude pour la validation du CDA (Concepteur Développeur d'Application)</p>
        <p>
          Tous droits réservés © 2022 - Bibliothèque en ligne - Réalisé par
          Cazimira Ambro
        </p>
      </FooterBottom>
    </LayoutContainerFooter>
  );
}
