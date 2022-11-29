import React from "react";
import styled from "styled-components";

const LayoutContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 10vh;
  padding-right: 140px;
  padding-left: 140px;
  bottom: 0;
  position: fixed;
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
    </LayoutContainerFooter>
  );
}
