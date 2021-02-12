import styled from "styled-components";

const WrapForm = styled.form`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 60%;
  padding: 10px 5px;
  background-color: transparent !important;
  border: none;
  border-bottom: solid 2px #49aee9;
  font-size: 16px;
  color: #fff;
  transition: all 0.3s ease-out;
  outline: none;

  &::placeholder,
  &::-webkit-input-placeholder {
    font-size: 16px;
    color: #fff;
  }

  &:-ms-input-placeholder {
    font-size: 16px;
    color: #fff;
  }

  &:focus {
    background-color: transparent;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Button = styled.button`
  width: 35%;
  padding: 10px 0;
  border: none;
  background-color: #49aee9;
  font-weight: 900;
  color: #fff;
  text-align: center;
  transition: all 0.3s ease-out;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: .8;
  }

  &:active {
    outline: none;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export { WrapForm, Input, Button };