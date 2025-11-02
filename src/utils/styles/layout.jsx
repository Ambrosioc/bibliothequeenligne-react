import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "./GlobalStyle";

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(180deg, ${colors.backgroundLight} 0%, #FFFEFB 100%);
  box-shadow: 0 2px 20px ${colors.shadowLight};
  width: 100%;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${colors.borderLight};

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const LayoutUl = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: flex-start;
  gap: 2.5rem;
  height: 100%;
  flex: 1;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LayoutLi = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem 0;
    border-bottom: 1px solid ${colors.borderLight};
  }
`;

export const LayoutLinks = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  color: ${colors.textPrimary};
  position: relative;
  padding: 0.5rem 0;
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
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, ${colors.secondary}, ${colors.primary});
    transition: width 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    color: ${colors.textPrimary};
  }
`;

export const LayoutButton = styled.button`
  border: none;
  display: flex;
  align-items: center;
  margin: 0 0.75rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: ${colors.textPrimary};
  border-radius: 8px;

  &:hover {
    background: ${colors.backgroundCard};
    color: ${colors.primary};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
