import styled from "styled-components";
import { colors } from "./GlobalStyle";

export const Form = styled.form`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${colors.backgroundCard};
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px ${colors.shadowMedium};
  border: 1px solid ${colors.borderLight};

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    max-width: 100%;
  }
`;

export const Label = styled.label`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: ${colors.textPrimary};
  margin-bottom: 0.5rem;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  border: 2px solid ${colors.borderLight};
  border-radius: 12px;
  background: ${colors.backgroundLight};
  padding: 0 1.25rem;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: ${colors.textPrimary};
  transition: all 0.3s ease;
  border-radius: 12px;

  &:focus {
    outline: none;
    border-color: ${colors.tertiary};
    box-shadow: 0 0 0 3px rgba(44, 85, 48, 0.1);
    background: white;
  }

  &:hover {
    border-color: ${colors.primary};
  }

  &::placeholder {
    color: ${colors.textSecondary};
    opacity: 0.6;
  }

  @media (max-width: 480px) {
    height: 48px;
    font-size: 0.95rem;
  }
`;

export const ConnectOrRegister = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-family: 'Inter', sans-serif;
  color: ${colors.textSecondary};

  p {
    font-size: 1rem;
    margin: 0;
  }
`;
