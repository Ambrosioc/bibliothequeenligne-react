import { Link } from "react-router-dom";
import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

export const LayoutUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LayoutLi = styled.li`
  height: 100%;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 10vh;
    border-bottom: 1px solid #000;
  }
`;

export const LayoutLinks = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const LayoutButton = styled.button`
  border: none;
  displey: flex;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: #fff;
  &:hover {
    color: #000;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
