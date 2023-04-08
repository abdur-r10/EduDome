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
import ClassesCheckboxSelect from "../../components/ClassesCheckboxSelect";
import UserAppBar from "../../components/UserAppBar";
import CloseIcon from "@mui/icons-material/Close";
import { formClasses as data } from "../../utils/classesData";

const MessageByForm = () => {
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
    // Extract the year group and form from each item
    const [aYear, aForm] = a.match(/^(\d+)([a-zA-Z]+)$/).slice(1);
    const [bYear, bForm] = b.match(/^(\d+)([a-zA-Z]+)$/).slice(1);

    // Sort by year group, then by band, then by form
    if (aYear !== bYear) {
      return parseInt(aYear) - parseInt(bYear);
    } else {
      return aForm.localeCompare(bForm);
    }
  });

  // Create an object to hold the classes for each subject
  const yearGroups = {};

  sortedArr.forEach((item) => {
    // Extract the subject from the item
    const [yearGroup] = item.match(/^(\d+)([a-zA-Z]+)$/).slice(1);

    // Add the item to the appropriate subject's array
    if (!yearGroups[yearGroup]) {
      yearGroups[yearGroup] = [item];
    } else {
      yearGroups[yearGroup].push(item);
    }
  });

  // Map over the subjects object to render each subject's classes as a list
  const displayRecivers = Object.keys(yearGroups).map((yearGroup) => (
    <div key={yearGroup}>
      <Typography variant="h6">{yearGroup}</Typography>
      <Grid container spacing={1}>
        {yearGroups[yearGroup].map((item) => (
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

      {/**------------------------------------class checkboxes by year group forms---------------------------- */}
      <Grid item xs={12} sm={6} width="40%">
        <ClassesCheckboxSelect
          selectedClasses={selectedClasses}
          setSelectedClasses={setSelectedClasses}
          data={data}
          typeOfData={"forms"}
        />
      </Grid>

      {/**------------------------------------Display selcted forms, method of sending the message and text box for message---------------------------- */}
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

export default MessageByForm;
