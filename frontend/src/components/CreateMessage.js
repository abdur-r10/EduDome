import React, { useState } from "react";
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Box,
  TextareaAutosize,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import ClassesCheckboxSelect from "./ClassesCheckboxSelect";
import UserAppBar from "./UserAppBar";
import CloseIcon from "@mui/icons-material/Close";

const CreateMessage = ({ data, typeOfData }) => {
  const [methods, setMethods] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleMethodChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setMethods([...methods, value]);
    } else {
      setMethods(methods.filter((m) => m !== value));
    }
  };

  const handleMessageChange = (event) => {
    const value = event.target.value;
    setMessage(value);
  };

  const handleRemove = (item) => {
    setSelectedClasses((prevSelected) =>
      prevSelected.filter((selectedItem) => selectedItem !== item)
    );
    const checkbox = document.getElementById(item);
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  const handleSubmit = () => {
    //!MAKE API CALL TO BACKEND HERE
    console.log({
      methods: methods,
      message: message,
      selectedClasses: selectedClasses,
    });
  };

  const sortedArr = selectedClasses.sort((a, b) => {
    //TODO: change here
    if (typeOfData === "subjects") {
      // Extract the year, subject, and set from each item
      const [, aYear, aSubject, aSet] = a.match(/^(\d+)([a-z]+)(\d+)$/);
      const [, bYear, bSubject, bSet] = b.match(/^(\d+)([a-z]+)(\d+)$/);

      // Sort by year, then by subject alphabetically, then by set
      if (aSubject !== bSubject) {
        return aSubject.localeCompare(bSubject);
      } else if (aYear !== bYear) {
        return parseInt(aYear) - parseInt(bYear);
      } else {
        return parseInt(aSet) - parseInt(bSet);
      }
    } 
    else if (typeOfData === "forms") {
      const [aYear, aForm] = a.match(/^(\d+)([a-zA-Z]+)$/).slice(1);
      const [bYear, bForm] = b.match(/^(\d+)([a-zA-Z]+)$/).slice(1);

      // Sort by year group, then by band, then by form
      if (aYear !== bYear) {
        return parseInt(aYear) - parseInt(bYear);
      } else {
        return aForm.localeCompare(bForm);
      }
    }
    return null;
  });

  // Create an object to hold the classes for each subject
  const sortedHeadings = {};
  //TODO: change here
  sortedArr.forEach((item) => {

    if(typeOfData === "subjects"){
        // Extract the subject from the item
    const [, , subject] = item.match(/^(\d+)([a-z]+)(\d+)$/);

    // Add the item to the appropriate subject's array
    if (!sortedHeadings[subject]) {
        sortedHeadings[subject] = [item];
    } else {
        sortedHeadings[subject].push(item);
    }
    }
    else if(typeOfData === "forms"){
        const [yearGroup] = item.match(/^(\d+)([a-zA-Z]+)$/).slice(1);

    // Add the item to the appropriate subject's array
    if (!sortedHeadings[yearGroup]) {
        sortedHeadings[yearGroup] = [item];
    } else {
        sortedHeadings[yearGroup].push(item);
    }
    }
    return null
  });

  // Map over the subjects object to render each subject's classes as a list
  const displayRecivers = Object.keys(sortedHeadings).map((subject) => (
    <div key={subject}>
      <Typography variant="h6">{subject.toUpperCase()}</Typography>
      <Grid container spacing={1}>
        {sortedHeadings[subject].map((item) => (
          <Grid item key={item}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px",
                borderRadius: "5px",
                backgroundColor: "#f2f2f2",
              }}
            >
              <Typography style={{ marginRight: "5px" }}>{item}</Typography>
              <IconButton size="small" onClick={() => handleRemove(item)}>
                <CloseIcon />
              </IconButton>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  ));

  return (
    <Grid
      container
      spacing={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/**------------------------------------App Bar---------------------------- */}
      <UserAppBar user={"teacher"} />

      {/**------------------------------------class checkboxes by subject---------------------------- */}
      <Grid item xs={12} sm={6} width="40%">
        <ClassesCheckboxSelect
          selectedClasses={selectedClasses}
          setSelectedClasses={setSelectedClasses}
          data={data}
          typeOfData={"subjects"}
        />
      </Grid>

      {/**------------------------------------display selcted classes, method of sending the message and text box for message---------------------------- */}
      <Grid item xs={12} sm={6} width="40%">
        <Grid container spacing={2} direction="column" mb="30px">
          {/**------------------------------------Display selcted classes---------------------------- */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">
              To:
              {displayRecivers}
            </Typography>
          </Grid>

          {/**------------------------------------Method of sending the message---------------------------- */}
          <Grid item xs={12} sm={6}>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={methods.includes("text")}
                    onChange={handleMethodChange}
                    value={"text"}
                  />
                }
                label={"Text"}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={methods.includes("e-mail")}
                    onChange={handleMethodChange}
                    value={"e-mail"}
                  />
                }
                label={"E-mail"}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={methods.includes("letter")}
                    onChange={handleMethodChange}
                    value={"letter"}
                  />
                }
                label={"Letter"}
              />
            </Box>
          </Grid>

          {/**------------------------------------Text box for message---------------------------- */}
          <Grid item xs={12} sm={6}>
            <TextareaAutosize
              id="message"
              required
              value={message}
              onChange={handleMessageChange}
              style={{
                overflow: "auto",
                resize: "vertical",
                paddingLeft: "10px",
                width: "90%",
                minHeight: "100px",
                maxHeight: "650px",
                fontSize: 20,
              }}
              aria-label="message"
            />
          </Grid>
        </Grid>

        {/**------------------------------------Submit button---------------------------- */}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Send Message
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateMessage;
