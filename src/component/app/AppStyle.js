import styled from "styled-components";
import imgBg from "../../img/bg.jpg";

const WrapApp = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 800px;
  min-height: 400px;
  box-shadow: 0px 13px 40px -13px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 840px) {
    width: 95%;
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;
    min-height: auto;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    height: 100%;
  }
`;

const AppInfo = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3% 5%;
  background-image: url(${imgBg});
  background-size: cover;

  @media screen and (max-width: 680px) {
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    height: 200px;
  }
`;

const AppData = styled.div`
  width: 60%;
  padding: 5% 3% 3%;
  background-color: #0a2333;

  @media screen and (max-width: 680px) {
    width: 100%;
    min-height: 280px;
    padding: 3% 2% 3%;
  }

  @media screen and (max-width: 425px) {
    min-height: calc(100% - 200px);
  }
`;

export { WrapApp, AppInfo, AppData };