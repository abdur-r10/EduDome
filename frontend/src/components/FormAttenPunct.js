import React from "react";
import { Chart } from "react-google-charts";
import { Box } from "@mui/system";

const FormAttenPunct = () => {
  const data = [
    ["Attendance and Punctuality", "Present", "Late", "Auth. Absence", "Unauth. Absence"],
    ["", 82.32, 10.00, 5.60, 2.08],
  ];

  const options = {
    title: "Attendance and Punctuality",
    titleTextStyle: {
        fontSize: 16,
        bold: true,
        textAlign: "centre",
    },
    isStacked: true,
    legend: { position: "top", alignment: "end" },
    colors: ["green", "orange", "yellow", "red"],
    vAxis: {
      minValue: 0,
      format: "#'%'",
    },
    hAxis: {
      title: "Percentage",
    },
    tooltip: {
        isHtml: true,
        trigger: "hover",
        textStyle: {
          color: "#333",
          fontSize: 14,
        },
        format: {
          suffix: "%",
        },
      },
  };

  return (
    <Box sx={{ border: '2px solid orange', overflow: 'auto', height: '305px', width: '700px'}}>
    <Chart
      width={"100%"}
      height={300}
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
    />
    </Box>
  );
};

export default FormAttenPunct;



// const data = {
//     present: 82.32,
//     late: 10.00,
//     authAbsence: 5.60,
//     unauthAbsence: 2.08
// }



//! want the attend/punct to display attendance of form as a percentage/no.of lates that week/average time late
//! by clicking on attendance it should display register for form class by weeks
//! by clicking on no. of lates it should show who was late in that form that week and by what time


/*
Individual data should look like so:

const data = {
    id : '1',
    date: '2023-02-12',
    studentID: 's1',
    status: 'present/late/absent/authAbsent',
    lateBy: 50 (in mins),
    remark: 'late for walking extremly slow',
}
*/