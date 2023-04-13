import React from "react";
import { classes as data } from "../../utils/classesData";
import CreateMessage from "../../components/CreateMessage";


const MessageByClass = () => {
  

  return (
    <CreateMessage data={data} typeOfData={'subjects'}/>
  );
};

export default MessageByClass;
