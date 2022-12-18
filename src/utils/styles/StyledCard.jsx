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
  justify-content: center;
  flex-wrap: wrap;
`;

export const CardBookLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    z-index: 2;
  }
`;

export const LastBooksImg = styled.img`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 281px;
  height: 267px;
  object-fit: contain;
  border-radius: 10px;
`;

export const CardBookInfo = styled.div``;
