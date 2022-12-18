import styled from "styled-components";

export const Form = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 413px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  height: 23px;
  left: 889px;
  top: 230px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
`;

export const Input = styled.input`
  margin-bottom: 3%;
  height: 45px;
  left: 889px;
  top: 460px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  background: #fafafa;
  padding-left: 2%;
  @media (max-width: 413px) {
  }
`;

export const ConnectOrRegister = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
