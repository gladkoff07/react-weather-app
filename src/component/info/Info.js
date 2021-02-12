import React from "react";
import styled from "styled-components";

const Header = styled.h2`
  font-size: 34px;
  text-transform: uppercase;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 840px) {
    font-size: 28px;
  }
`;

const Appeal = styled.div`
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
`;

const Info = () => {
  return (
    <>
      <Header>Погодное приложение</Header>
      <Appeal>Узнайте погоду в вашем городе</Appeal>
    </>
  );
};

export default Info;
