import React, { useState } from "react";
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
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = [
  { id: "date_set", label: "Date set" },
  { id: "from", label: "From" },
  { id: "title", label: "Title" },
  { id: "description", label: "Description" },
  { id: "document", label: "Documents" },
  { id: "due", label: "Date Due" },
];

const HomeworkCentre = ({
  popup,
  data,
  setData,
  selectedRows,
  setSelectedRows,
}) => {
  const [orderBy, setOrderBy] = useState("date_set");
  const [order, setOrder] = useState("desc");

  const handleRowClick = (row) => {
    if (selectedRows.includes(row.id)) {
      setSelectedRows(selectedRows.filter((id) => id !== row.id));
    } else {
      setSelectedRows([...selectedRows, row.id]);
    }
  };

  const sortedData = data.sort((a, b) => {
    const orderValue = order === "desc" ? -1 : 1;
    if (orderBy === "date_set" || orderBy === "due") {
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

  const handleSort = (columnId) => {
    if (orderBy === columnId) {
      setOrder(order === "desc" ? "asc" : "desc");
    } else {
      setOrderBy(columnId);
      setOrder("desc");
    }
  };

  const handleDelete = (rowId) => {
    setDeleteConfirmationOpen(true);
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

  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

  const handleDeleteConfirmation = () => {
    const updatedData = data.filter((row) => !selectedRows.includes(row.id));
    setData(updatedData);
    setSelectedRows([]);
    setDeleteConfirmationOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmationOpen(false);
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const tableRows =
    data.length === 0 ? (
      <TableRow>
        <TableCell colSpan={columns.length + 2}>
          No Items In Homework Centre
        </TableCell>
      </TableRow>
    ) : (
      sortedData
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => (
          <TableRow
            key={row.id}
            sx={{
              backgroundColor: isRowSelected(row.id) ? "#e87121" : "white",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#e87121",
              },
            }}
            onClick={() => handleRowClick(row)}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={isRowSelected(row.id)}
                onChange={() => toggleRowSelection(row.id)}
              />
            </TableCell>
            <TableCell>{row.date_set}</TableCell>
            <TableCell>{row.from}</TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>{row.document}</TableCell>
            <TableCell>{row.due}</TableCell>
          </TableRow>
        ))
    );

  return (
    <Box
      sx={{
        border: "5px solid #04AA6D",
        overflow: "auto",
        height: popup ? "500px" : "300px",
        width: popup ? "1000px" : "722px",
        resize: popup ? "" : "vertical",
        minHeight: "300px",
        maxHeight: "500px",
      }}
    >
      <Typography variant="h6" align="center">
        Homework Centre
      </Typography>
      <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
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
                    width: column.id !== "description" ? "200px" : "500px",
                    fontWeight: "bold",
                    backgroundColor: "#F5F5F5", // Unique color for table header
                  }}
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

      {/* Delete Confirmation Dialog */}
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

export default HomeworkCentre;
