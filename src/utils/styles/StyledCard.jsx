import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardBookUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardBookLi = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  margin: 1rem;
  transition: all 0.2s ease-in-out;
  border: 1px solid #000;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    transform: scale(1.1);
  }
`;
