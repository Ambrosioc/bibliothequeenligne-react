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
  width: 75%;
  object-fit: cover;
  border-radius: 10px;
`;

export const CardBookInfo = styled.div`
  position: absolute;
  width: 281px;
  height: 267px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
