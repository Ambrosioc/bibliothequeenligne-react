import styled from "styled-components";
import backgroundimg from "../../asset/img/pexels-keira-burton-6147369.jpg";

export const Background = styled.div`
  background-image: url(${backgroundimg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 80vh;
  width: 100%;
`;

export const BackgroundGap = styled.div`
  height: 80vh;
  width: 50%;
  @media (max-width: 768px) {
    width: 0;
    height: 0;
  }
`;

export const BackgroundContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px 0px 0px 30px;
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0px;
  }
`;

export const Form = styled.form`
  width: 50%;
  height: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 35%;
  }
`;

export const Title = styled.h1`
  width: 50%;
  height: 48%;
  font-size: 3em;
  @media (max-width: 768px) {
    width: 100%;
    height: 20%;
    font-size: 2em;
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

  color: #000000;
`;

export const Input = styled.input`
  height: 45px;
  left: 889px;
  top: 460px;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
`;

export const ConnectOrRegister = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
