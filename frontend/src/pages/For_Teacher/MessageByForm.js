import React from "react";
import { formClasses as data } from "../../utils/classesData";
import CreateMessage from "../../components/CreateMessage";

const MessageByForm = () => {
  

  return (
    <CreateMessage data={data} typeOfData={'forms'}/>
  );
};

export default MessageByForm;
