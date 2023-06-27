import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import HomeworkCentre from "../../components/HomeworkCentre";
import DetentionCentre from "../../components/DetentionCentre";
import NotificationCentre from "../../components/NotificationCenter";
import FormApBp from "../../components/FormApBp";
import FormAttenPunct from "../../components/FormAttenPunct";
import TeacherSchedule from "../../components/TeacherSchedule";
import UserAppBar from "../../components/UserAppBar";

//! Make API Call to get Homework, Detention, Form AP/BP, Form Atten/Punct, Notifications, timetable

export default function TeacherUI() {
  //-----------------------STATE FOR POPUPS---------------
  const [notificationPopupOpen, setNotificationPopupOpen] = useState(false);
  const [formApBpPopupOpen, setFormApBpPopupOpen] = useState(false);
  const [formAttenPunctPopupOpen, setFormAttenPunctPopupOpen] = useState(false);
  const [homeworkPopupOpen, setHomeworkPopupOpen] = useState(false);
  const [detentionPopupOpen, setDetentionPopupOpen] = useState(false);

  //-----------------------DATA ROW SELECTION-------------
  const [selectedRowsApBp, setSelectedRowsApBp] = useState([]);
  const [selectedRowsHomework, setSelectedRowsHomework] = useState([]);
  const [selectedRowsDetention, setSelectedRowsDetention] = useState([]);

  //----------------------DATA----------------------------
  const [homeworkData, setHomeworkData] = useState([
    {
      id: "homework1",
      from: "t1",
      to: "s1",
      title: "Example Homework1",
      description:
        "Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.",
      document: "some document",
      date_set: "2023-02-01",
      due: "2023-02-27",
      deletion_date: "2023-03-06",
    },
    {
      id: "homework2",
      from: "t1",
      to: "s1",
      title: "Example Homework2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo turpis non leo venenatis tristique.",
      document: "some document",
      date_set: "2023-02-02",
      due: "2023-02-27",
      deletion_date: "2023-03-06",
    },
    {
      id: "homework3",
      from: "t1",
      to: "s1",
      title: "Example Homework3",
      description: "Sed feugiat laoreet mi, sed ornare nibh gravida a.",
      document: "some document",
      date_set: "2023-02-03",
      due: "2023-02-27",
      deletion_date: "2023-03-06",
    },
    {
      id: "homework4",
      from: "t1",
      to: "s1",
      title: "Example Homework4",
      description:
        "Phasellus euismod tellus nec ex lobortis, sit amet elementum nisl fermentum.",
      document: "some document",
      date_set: "2023-02-04",
      due: "2023-02-27",
      deletion_date: "2023-03-06",
    },
    {
      id: "homework5",
      from: "t1",
      to: "s1",
      title: "Example Homework5",
      description: "Nulla nec faucibus mauris, sed vestibulum diam.",
      document: "some document",
      date_set: "2023-02-05",
      due: "2023-02-27",
      deletion_date: "2023-03-06",
    },
    {
      id: "homework6",
      from: "t1",
      to: "s1",
      title: "Example Homework6",
      description:
        "Maecenas tristique, odio quis malesuada commodo, sapien orci imperdiet nibh, sed lobortis enim velit quis nisi.",
      document: "some document",
      date_set: "2023-02-06",
      due: "2023-02-27",
      deletion_date: "2023-03-06",
    },
    {
      id: "homework7",
      from: "t1",
      to: "s1",
      title: "Example Homework7",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      document: "some document",
      date_set: "2023-02-07",
      due: "2023-02-27",
      deletion_date: "2023-03-06",
    },
    {
      id: "homework8",
      from: "t1",
      to: "s1",
      title: "Example Homework8",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      document: "some document",
      date_set: "2023-02-08",
      due: "2023-02-27",
      deletion_date: "2023-03-06",
    },
    {
      id: "homework9",
      from: "t1",
      to: "s1",
      title: "Example Homework9",
      description:
        "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      document: "some document",
      date_set: "2023-02-09",
      due: "2023-02-31",
      deletion_date: "2023-03-06",
    },
    {
      id: "homework10",
      from: "t1",
      to: "s1",
      title: "Example Homework10",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      document: "some document",
      date_set: "2023-02-10",
      due: "2023-02-27",
      deletion_date: "2023-03-06",
    },
  ]);

  const [detentionData, setDetentionData] = useState([
    {
      id: "detention1",
      from: "t1",
      to: "s1",
      date: "2023-02-18",
      reason:
        "Bad Behaviour - Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.",
      time: "14:30",
      duration: "1hr",
      room: "Lunch Hall",
      attended: "No",
    },
    {
      id: "detention2",
      from: "t1",
      to: "s1",
      date: "2023-02-19",
      reason:
        "No Homework - Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.",
      time: "14:30",
      duration: "1hr",
      room: "F10",
      attended: "No",
    },
    {
      id: "detention3",
      from: "t1",
      to: "s1",
      date: "2023-02-20",
      reason:
        "Other - Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.",
      time: "8:30",
      duration: "30min",
      room: "S24",
      attended: "No",
    },
  ]);

  const [formApBpData, setFormApBpData] = useState([
    {
      id: "AP1",
      date: "2023-02-01",
      reason: "some reason",
      details:
        "Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.",
      "ap/bp": "AP",
      from: "t1",
      to: "s1",
    },
    {
      id: "BP1",
      date: "2023-02-04",
      reason: "some reason",
      details:
        "Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.",
      "ap/bp": "BP",
      from: "t2",
      to: "s1",
    },
    {
      id: "AP2",
      date: "2023-02-02",
      reason: "some reason",
      details:
        "Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.",
      "ap/bp": "AP",
      from: "t3",
      to: "s3",
    },
    {
      id: "BP2",
      date: "2023-02-04",
      reason: "some reason",
      details:
        "Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.",
      "ap/bp": "BP",
      from: "t4",
      to: "s4",
    },
    {
      id: "AP3",
      date: "2023-02-03",
      reason: "some reason",
      details:
        "Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.",
      "ap/bp": "AP",
      from: "t5",
      to: "s5",
    },
  ]);

  //-----------------------TOGGLE FOR POPUPS---------------------
  const handleNotificationPopupToggle = () => {
    setNotificationPopupOpen(!notificationPopupOpen);
  };
  const handleFormApBpPopupToggle = () => {
    setFormApBpPopupOpen(!formApBpPopupOpen);
  };
  const handleFormAttenPunctPopupToggle = () => {
    setFormAttenPunctPopupOpen(!formAttenPunctPopupOpen);
  };
  const handleHomeworkPopupToggle = () => {
    setHomeworkPopupOpen(!homeworkPopupOpen);
  };
  const handleDetentionPopupToggle = () => {
    setDetentionPopupOpen(!detentionPopupOpen);
  };

  return (
    <Grid container spacing={2} minWidth="1445px">
      <UserAppBar user={"teacher"} />

      {/**----------------------------------------------------------SCHEDULE------------------------------------------------------------ */}
      <Grid
        item
        xs={6}
        container
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            border: "5px solid black",
            padding: "8px",
            borderRadius: "4px",
            overflow: "auto",
            resize: "vertical",
            height: "600px",
            minHeight: "600px",
            maxHeight: "970px",
            width: "722px",
          }}
        >
          <TeacherSchedule />
        </Box>
      </Grid>

      {/**---------------------------------------------------NOTIFICATION AND FORM STATS----------------------------------------------------- */}
      <Grid
        item
        xs={6}
        container
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            border: "5px solid black",
            padding: "8px",
            borderRadius: "4px",
            overflow: "auto",
            resize: "vertical",
            height: "600px",
            minHeight: "600px",
            maxHeight: "970px",
            width: "722px",
          }}
        >
          <Button variant="contained" onClick={handleNotificationPopupToggle}>
            <OpenInFullIcon />
          </Button>
          <NotificationCentre popup={false} />
          <br />
          <Button variant="contained" onClick={handleFormApBpPopupToggle}>
            {" "}
            <OpenInFullIcon />{" "}
          </Button>
          <FormApBp
            popup={false}
            type={"Form"}
            data={formApBpData}
            setData={setFormApBpData}
            selectedRows={selectedRowsApBp}
            setSelectedRows={setSelectedRowsApBp}
          />
          <br />
          <Button variant="contained" onClick={handleFormAttenPunctPopupToggle}>
            <OpenInFullIcon />
          </Button>
          <FormAttenPunct popup={false} />

          <Dialog
            open={notificationPopupOpen}
            onClose={handleNotificationPopupToggle}
            maxWidth="lg"
          >
            <DialogTitle>NOTIFICATIONS</DialogTitle>
            <DialogContent sx={{ width: "auto" }}>
              <NotificationCentre popup={true} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleNotificationPopupToggle}>Close</Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={formApBpPopupOpen}
            onClose={handleFormApBpPopupToggle}
            maxWidth="lg"
          >
            <DialogTitle>FORM AP/BP</DialogTitle>
            <DialogContent sx={{ width: "auto" }}>
              <FormApBp
                popup={true}
                type={"Form"}
                data={formApBpData}
                setData={setFormApBpData}
                selectedRows={selectedRowsApBp}
                setSelectedRows={setSelectedRowsApBp}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleFormApBpPopupToggle}>Close</Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={formAttenPunctPopupOpen}
            onClose={handleFormAttenPunctPopupToggle}
            maxWidth="lg"
          >
            <DialogTitle>FORM ATTENDANCE AND PUNCTUALITY</DialogTitle>
            <DialogContent sx={{ width: "auto" }}>
              <FormAttenPunct popup={true} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleFormAttenPunctPopupToggle}>Close</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Grid>

      {/**----------------------------------------------------------HOMEWORK------------------------------------------------------------ */}
      <Grid
        item
        xs={6}
        container
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ padding: "8px", borderRadius: "4px", width: "auto" }}>
          <Button variant="contained" onClick={handleHomeworkPopupToggle}>
            <OpenInFullIcon />
          </Button>
          <HomeworkCentre
            popup={false}
            data={homeworkData}
            setData={setHomeworkData}
            selectedRows={selectedRowsHomework}
            setSelectedRows={setSelectedRowsHomework}
          />
        </Box>

        <Dialog
          open={homeworkPopupOpen}
          onClose={handleHomeworkPopupToggle}
          maxWidth="lg"
        >
          <DialogTitle>HOMEWORK</DialogTitle>
          <DialogContent sx={{ width: "auto" }}>
            <HomeworkCentre
              popup={true}
              data={homeworkData}
              setData={setHomeworkData}
              selectedRows={selectedRowsHomework}
              setSelectedRows={setSelectedRowsHomework}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleHomeworkPopupToggle}>Close</Button>
          </DialogActions>
        </Dialog>
      </Grid>

      {/**----------------------------------------------------------DETENTION------------------------------------------------------------ */}
      <Grid
        item
        xs={6}
        container
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ padding: "8px", borderRadius: "4px", width: "auto" }}>
          <Button variant="contained" onClick={handleDetentionPopupToggle}>
            <OpenInFullIcon />
          </Button>
          <DetentionCentre
            popup={false}
            data={detentionData}
            setData={setDetentionData}
            selectedRows={selectedRowsDetention}
            setSelectedRows={setSelectedRowsDetention}
          />
        </Box>

        <Dialog
          open={detentionPopupOpen}
          onClose={handleDetentionPopupToggle}
          maxWidth="lg"
        >
          <DialogTitle>DETENTIONS</DialogTitle>
          <DialogContent sx={{ width: "auto" }}>
            <DetentionCentre
              popup={true}
              data={detentionData}
              setData={setDetentionData}
              selectedRows={selectedRowsDetention}
              setSelectedRows={setSelectedRowsDetention}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDetentionPopupToggle}>Close</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
}