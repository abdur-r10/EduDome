import React, { useState } from "react";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
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
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Checkbox,
} from "@mui/material";

const columns = [
  { id: "date", label: "Date" },
  { id: "ap/bp", label: "AP/BP" },
  { id: "reason", label: "Reason" },
  { id: "from", label: "From" },
];

const FormApBp = ({
  popup,
  type,
  data,
  setData,
  selectedRows,
  setSelectedRows,
}) => {
  if (type === "Form") {
    const toIndex = columns.findIndex((column) => column.id === "to");
    if (toIndex === -1) {
      columns.splice(1, 0, { id: "to", label: "To" });
    }
  }

  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const handleRowClick = (rowId) => {
    if (isRowSelected(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const isRowSelected = (rowId) => selectedRows.includes(rowId);

  const toggleRowSelection = (rowId) => {
    if (isRowSelected(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  const isAllRowsSelected =
    data.length > 0 && selectedRows.length === data.length;

  const toggleAllRowsSelection = () => {
    if (isAllRowsSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.id));
    }
  };

  const handleDeleteConfirmation = () => {
    const updatedData = data.filter((row) => !selectedRows.includes(row.id));
    setData(updatedData);
    setSelectedRows([]);
    setDeleteConfirmationOpen(false);
  };

  const handleDeleteCancel = (rowId) => {
    setDeleteConfirmationOpen(false);
  };

  const handleDelete = (rowId) => {
    setDeleteConfirmationOpen(true);
  };

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

  const tableRows =
    sortedData.length === 0 ? (
      <TableRow>
        <TableCell colSpan={columns.length + 2}>
          No Items In AP/BP Centre
        </TableCell>
      </TableRow>
    ) : (
      sortedData
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => (
          <TableRow
            key={row.id}
            sx={{
              backgroundColor: row["ap/bp"] === "AP" ? "green" : "red",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: row["ap/bp"] === "AP" ? "#90EE90" : "#E6676B",
              },
              ...(isRowSelected(row.id) && { backgroundColor: "#5A5A5A" }),
            }}
            onClick={() => handleRowClick(row.id)}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={isRowSelected(row.id)}
                onChange={() => toggleRowSelection(row.id)}
              />
            </TableCell>
            {columns.map((column) => (
              <TableCell key={column.id} sx={{ color: "white" }}>
                {row[column.id]}
              </TableCell>
            ))}
          </TableRow>
        ))
    );

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
        {type === "Form" ? "Form AP/BP" : "Ap/BP"}
      </Typography>
      <TableContainer component={Paper}>
        <Table
          aria-label="simple table"
          stickyHeader
          sx={{ border: "1px solid gray" }}
        >
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isAllRowsSelected}
                  onChange={toggleAllRowsSelection}
                />
                <IconButton color="error" onClick={handleDelete}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{
                    width: column.id !== "reason" ? "200px" : "500px",
                    fontWeight: "bold",
                    backgroundColor: "#F5F5F5", // Unique color for table header
                  }}
                  onClick={() => handleSort(column.id)}
                >
                  {column.label}
                </TableCell>
              ))}
              {type === "Centre" && <TableCell />}
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

      <Dialog
        open={deleteConfirmationOpen}
        onClose={handleDeleteCancel}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          Are you sure you want to delete?
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" id="delete-dialog-description">
            This action cannot be undone.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancel</Button>
          <Button onClick={handleDeleteConfirmation}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FormApBp;
