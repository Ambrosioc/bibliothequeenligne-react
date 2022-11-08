import React from "react";
import styled from "styled-components";
import { LayoutContainer } from "../../../utils/styles/layout";

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export default function Footer() {
  return (
    <LayoutContainer style={styles.footer}>
      <FooterDiv>
        <div>
          <h3>Catégories</h3>
        </div>
        <div>
          <h3>Utile</h3>
        </div>
        <div>
          <h3>Contact</h3>
        </div>
      </FooterDiv>
      <div>
        Tous droits réservés © 2022 - Bibliothèque en ligne - Réalisé par
        Cazimira Ambro
      </div>
    </LayoutContainer>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 2rem",
    height: "10rem",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
  },
};
