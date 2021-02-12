import React from "react";
import { BlockData, DataItem, DataItemName, DataItemValue, DataError } from "./DataStyle";

const Data = ({ data: {city, country, temp, icon, sunrise, sunset, error } }) => {
  return (
    <>
      {city && (
        <BlockData>
          <DataItem>
            <DataItemName>Местоположение:</DataItemName>
            <DataItemValue>{city}, {country}</DataItemValue>
          </DataItem>
          <DataItem>
            <DataItemName>Температура:</DataItemName>
            <DataItemValue>
              {temp}
              <img src={icon} alt="" />
            </DataItemValue>
          </DataItem>
          <DataItem>
            <DataItemName>Восход солнца:</DataItemName>
            <DataItemValue>{sunrise}</DataItemValue>
          </DataItem>
          <DataItem>
            <DataItemName>Заход солнца:</DataItemName>
            <DataItemValue>{sunset}</DataItemValue>
          </DataItem>
        </BlockData>
      )}
      {error && <DataError>{ error}</DataError>}
    </>
  );
};

export default Data;
