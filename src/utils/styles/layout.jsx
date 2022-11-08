import { Link } from "react-router-dom";
import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const LayoutUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  align-items: center;
`;

export const LayoutLi = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const LayoutLinks = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const LayoutButton = styled.button`
  border: none;
  displey: flex;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: #fff;
`;
