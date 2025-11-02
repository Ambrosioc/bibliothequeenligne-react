import styled from "styled-components";
import { colors } from "./GlobalStyle";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
`;

export const CardBookUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

export const CardBookLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${colors.backgroundCard};
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  box-shadow: 0 4px 12px ${colors.shadowLight};
  border: 1px solid ${colors.borderLight};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${colors.secondary}, ${colors.primary});
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 32px ${colors.shadowMedium};
    border-color: ${colors.secondary};

    &::before {
      transform: scaleX(1);
    }

    img {
      transform: scale(1.05);
      box-shadow: 0 8px 24px ${colors.shadowMedium};
    }
  }

  &:active {
    transform: translateY(-4px) scale(1);
  }
`;

export const LastBooksImg = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.25rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px ${colors.shadowLight};
  background: linear-gradient(135deg, ${colors.backgroundCard}, ${colors.borderLight});

  @media (max-width: 768px) {
    height: 240px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const CardBookInfo = styled.div`
  width: 100%;
  text-align: center;

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.textPrimary};
    line-height: 1.5;
    margin: 0;
    
    br {
      display: block;
      content: '';
      margin: 0.5rem 0;
    }
  }

  p:first-of-type {
    font-family: 'Playfair Display', serif;
    font-size: 1.125rem;
    font-weight: 600;
    color: ${colors.textPrimary};
    margin-bottom: 0.5rem;
  }

  p:last-of-type {
    font-size: 0.95rem;
    color: ${colors.textSecondary};
    font-weight: 400;
  }
`;
