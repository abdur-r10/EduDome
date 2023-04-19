import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
} from "@mui/material";

const columns = [
  { id: "date", label: "Date" },
  { id: "ap/bp", label: "AP/BP" },
  { id: "reason", label: "Reason" },
  { id: "from", label: "From" },
];

const FormApBp = ({ popup, type }) => {
  if (type === "Form") {
    const toIndex = columns.findIndex((column) => column.id === "to");
    if (toIndex === -1) {
      columns.splice(1, 0, { id: "to", label: "To" });
    }
  }

  const data = [
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
  ];

  //-------------------------PAGE PAGINATION FUNCTION-------------------------
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //-------------------------DATE SORT FUNCTION------------------------------
  const [orderBy, setOrderBy] = useState("date_set");
  const [order, setOrder] = useState("desc");
  const handleSort = (columnId) => {
    if (orderBy === columnId) {
      setOrder(order === "desc" ? "asc" : "desc");
    } else {
      setOrderBy(columnId);
      setOrder("desc");
    }
  };

  const sortedData = data.sort((a, b) => {
    const orderValue = order === "desc" ? -1 : 1;
    if (orderBy === "date") {
      if (a[orderBy] < b[orderBy]) {
        return -1 * orderValue;
      }
      if (a[orderBy] > b[orderBy]) {
        return 1 * orderValue;
      }
      return 0;
    }
    return 0;
  });

  const tableRows = sortedData
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) => (
      <TableRow
        key={row.id}
        sx={{ backgroundColor: row["ap/bp"] === "AP" ? "green" : "red" }}
      >
        {columns.map((column) => (
          <TableCell key={column.id} sx={{ color: "white" }}>
            {row[column.id]}
          </TableCell>
        ))}
      </TableRow>
    ));

  return (
    <Box
      sx={{
        border: "5px solid blue",
        overflow: "auto",
        height: popup ? "500px" : "200px",
        width: popup ? "1000px" : "700px",
        resize: popup ? "" : "vertical",
        minHeight: "200px",
        maxHeight: "600px",
      }}
    >
      <Typography variant="h6" align="center">
        {type} AP/BP
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={
                    column.id !== "description"
                      ? { width: "200px" }
                      : { width: "500px" }
                  }
                  key={column.id}
                  onClick={() => handleSort(column.id)}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{tableRows}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[4, 8, 12]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default FormApBp;
