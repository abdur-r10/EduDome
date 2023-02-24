import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Typography } from '@mui/material';
import { Box } from '@mui/system';

const columns = [
    { id: 'date', label: 'Date' },
    { id: 'time', label: 'Time'},
    { id: 'from', label: 'With' },
    { id: 'reason', label: 'Reason' },
    { id: 'duration', label: 'Duration' },
    { id: 'room', label: 'Room' },
];
  
  const DetentionCentre = () => {
  
    const data = [
      {
        'id': 'detention1',
        'from': 't1',
        'to': 's1',
        'date': '2023-02-18',
        'reason': 'Bad Behaviour - Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.',
        'time': '14:30',
        'duration': '1hr',
        'room': 'Lunch Hall',
        'attended': 'No'
      },
      {
        'id': 'detention2',
        'from': 't1',
        'to': 's1',
        'date': '2023-02-19',
        'reason': 'No Homework - Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.',
        'time': '14:30',
        'duration': '1hr',
        'room': 'F10',
        'attended': 'No'
      },
      {
        'id': 'detention3',
        'from': 't1',
        'to': 's1',
        'date': '2023-02-20',
        'reason': 'Other - Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.',
        'time': '8:30',
        'duration': '30min',
        'room': 'S24',
        'attended': 'No'
      }
    ]
  
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
    const [orderBy, setOrderBy] = useState('date_set');
    const [order, setOrder] = useState('desc');
    const handleSort = (columnId) => {
      if (orderBy === columnId) {
        setOrder(order === 'desc' ? 'asc' : 'desc');
      } else {
        setOrderBy(columnId);
        setOrder('desc');
      }
    };
  
    const sortedData = data.sort((a, b) => {
        const orderValue = order === 'desc' ? -1 : 1;
        if (orderBy === 'date') {
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

      //-----------------------ROW HIGHLIGHT ON CLICK FUNCTION----------------
      const [selectedRows, setSelectedRows] = useState([]);

      const handleRowClick = (row) => {
        if (selectedRows.includes(row.id)) {
          setSelectedRows(selectedRows.filter((id) => id !== row.id));
        } else {
          setSelectedRows([...selectedRows, row.id]);
        }
      };
      //----------------------------------------------------------------------
        
    
      const tableRows = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
        <TableRow key={row.id} sx={{ backgroundColor: selectedRows.includes(row.id) ? 'lightgray' : 'white' }} onClick={() => handleRowClick(row)}>
          {columns.map((column) => (
            <TableCell key={column.id}>{row[column.id]}</TableCell>
          ))}
        </TableRow>
      ));
    
      return (
      <Box sx={{ border: '2px solid red', overflow: 'auto', height: '300px', width: '700px', resize: 'both', minWidth: '550px', maxWidth: '1000px', minHeight: '300px', maxHeight: '600px'}}>
          <Typography variant="h6" align="center">Detention Centre</Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" stickyHeader sx={{ border: '1px solid gray' }}>
              <TableHead >
                <TableRow>
                  {columns.map((column) => (
                    <TableCell sx={column.id !== 'reason' ? { width: '200px' } : {width: '500px'} } key={column.id} onClick={() => handleSort(column.id)}>
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
  
  export default DetentionCentre;
  