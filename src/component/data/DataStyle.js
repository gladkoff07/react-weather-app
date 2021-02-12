import styled from "styled-components";

const BlockData = styled.div`
  margin-top: 20px;
`;

const DataItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0 15px;
  border-bottom: solid 2px rgba(255,255,255,0.06);
  font-size: 16px;

  @media screen and (max-width: 680px) {
    padding: 10px 0 10px;
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

const DataItemName = styled.span`
  width: 45%;
  color: #f16051;

  @media screen and (max-width: 425px) {
    width: 50%;
  }
`;

const DataItemValue = styled.span`
  width: 55%;
  display: inline-flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 50%;
  }
`;

const DataError = styled.div`
  margin-top: 20px;
  color: #f16051;
  font-weight: 600;
`

export { BlockData, DataItem, DataItemName, DataItemValue, DataError }; 