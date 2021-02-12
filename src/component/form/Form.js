import React from "react";
import { Button, Input, WrapForm } from "./FormStyle";

const Form = ({ getData }) => {
  return (
    <>
      <WrapForm onSubmit={getData}>
        <Input type="text" name="city" autoComplete="off" placeholder="Город" />
        <Button>Узнать погоду</Button>
      </WrapForm>
    </>
  );
};

export default Form;
