import React, { useState } from "react";
import { classes as classesData } from "../utils/classesData";
import {
  FormControlLabel,
  Checkbox,
  Paper,
  Typography,
  Grid,
} from "@mui/material";

const ClassesCheckboxSelect = ({ selectedClasses, setSelectedClasses }) => {
  const [isOpen, setIsOpen] = useState({});

  const handleToggle = (subject, event) => {
    // Check if the clicked element is a checkbox
    if (event && event.target && event.target.nodeName === "INPUT") {
      return;
    }

    setIsOpen({ ...isOpen, [subject]: !isOpen[subject] });
  };

  const handleCheckboxChange = (event) => {
    event.stopPropagation(); // Stop the event from propagating to parent elements
    const { value, checked } = event.target;
    setSelectedClasses((prevState) => {
      const newState = checked
        ? [...prevState, value]
        : prevState.filter((c) => c !== value);
      console.log(newState);
      return newState;
    });
  };

  const handleSelectAllYear = (subject, yearGroup, event) => {
    event.stopPropagation();
    const yearClasses = classesData[subject][yearGroup];
    const allYearClassesSelected = yearClasses.every((className) =>
      selectedClasses.includes(className)
    );
    let newSelectedClasses = [...selectedClasses];
    if (allYearClassesSelected) {
      newSelectedClasses = newSelectedClasses.filter(
        (c) => !yearClasses.includes(c)
      );
    } else {
      newSelectedClasses = [...newSelectedClasses, ...yearClasses];
    }
    setSelectedClasses(newSelectedClasses);
    console.log(newSelectedClasses);
  };

  const handleSelectAllSubject = (subject, event) => {
    event.stopPropagation();
    const subjectClasses = Object.values(classesData[subject]).flat();
    const allSubjectClassesSelected = subjectClasses.every((className) =>
      selectedClasses.includes(className)
    );
    let newSelectedClasses = [...selectedClasses];
    if (allSubjectClassesSelected) {
      newSelectedClasses = newSelectedClasses.filter(
        (c) => !subjectClasses.includes(c)
      );
    } else {
      newSelectedClasses = [
        ...newSelectedClasses,
        ...subjectClasses.filter(
          (className) => !newSelectedClasses.includes(className)
        ),
      ];
    }
    setSelectedClasses(newSelectedClasses);
    console.log(newSelectedClasses);
  };

  return (
    <Grid container spacing={2}>
      {Object.keys(classesData).map((subject) => (
        <Grid item xs={12} sm={6} md={4} key={subject}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography
              variant="h6"
              onClick={(event) => handleToggle(subject, event)}
            >
              {subject} {isOpen[subject] ? "▼" : "▶"}
            </Typography>
            {isOpen[subject] && (
              <Grid container spacing={1} sx={{ mt: 2 }}>
                {Object.keys(classesData[subject]).map((yearGroup) => (
                  <Grid item xs={12} key={`${subject}-year${yearGroup}`}>
                    <Typography variant="subtitle1">
                      <strong>Year {yearGroup}:</strong>
                      <Checkbox
                        checked={
                          selectedClasses.some((c) =>
                            classesData[subject][yearGroup].includes(c)
                          ) &&
                          classesData[subject][yearGroup].every((c) =>
                            selectedClasses.includes(c)
                          )
                        }
                        onChange={(event) =>
                          handleSelectAllYear(subject, yearGroup, event)
                        }
                      />
                      Select all classes for year {yearGroup}
                    </Typography>
                    <div>
                      <Grid container spacing={1}>
                        {classesData[subject][yearGroup].map((className) => (
                          <Grid item key={className}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={selectedClasses.includes(className)}
                                  onChange={handleCheckboxChange}
                                  value={className}
                                />
                              }
                              label={className}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Typography variant="subtitle1">
                    <strong>Shortcut</strong>
                    <Checkbox
                      checked={Object.values(classesData[subject])
                        .flat()
                        .every((className) =>
                          selectedClasses.includes(className)
                        )}
                      onChange={(event) =>
                        handleSelectAllSubject(subject, event)
                      }
                    />
                    Select all {subject} classes
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ClassesCheckboxSelect;
