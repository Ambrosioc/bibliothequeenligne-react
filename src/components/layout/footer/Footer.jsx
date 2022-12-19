import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LayoutContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export default function Footer() {
  return (
    <LayoutContainerFooter>
      <FooterDiv>
        <div style={styles.categories}>
          <h3>Catégories</h3>
          <Link to={"/"} style={styles.links}>
            Mangas
          </Link>
          <Link style={styles.links}>Roman</Link>
          <Link style={styles.links}>BD</Link>
          <Link style={styles.links}>Comics</Link>
          <Link style={styles.links}>Autres</Link>
        </div>
        <div>
          <h3>Utile</h3>
          <p>Les liens utiles</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>0668965739</p>
          <p>Mail</p>
        </div>
      </FooterDiv>
      <div>
        Tous droits réservés © 2022 - Bibliothèque en ligne - Réalisé par
        Cazimira Ambro
      </div>
    </LayoutContainerFooter>
  );
}

const styles = {
  categories: {
    display: "flex",
    flexDirection: "column",
  },
  links: {
    textDecoration: "none",
  },
};
