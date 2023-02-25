import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Typography } from '@mui/material';
import { Box } from '@mui/system';


const columns = [
  { id: 'date_set', label: 'Date set' },
  { id: 'from', label: 'From' },
  { id: 'title', label: 'Title' },
  { id: 'description', label: 'Description' },
  { id: 'document', label: 'Documents' },
  { id: 'due', label: 'Date Due' },
];

const HomeworkCentre = () => {

    const data = [
        {
            'id': 'homework1',
            'from': 't1',
            'to': 's1',
            'title': 'Example Homework1',
            'description': 'Vestibulum sit amet dui commodo, lacinia ex eu, vestibulum odio. Suspendisse potenti.',
            'document': 'some document',
            'date_set': '2023-02-01',
            'due': '2023-02-27',
            'deletion_date': '2023-03-06',
        },
        {
            'id': 'homework2',
            'from': 't1',
            'to': 's1',
            'title': 'Example Homework2',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo turpis non leo venenatis tristique.',
            'document': 'some document',
            'date_set': '2023-02-02',
            'due': '2023-02-27',
            'deletion_date': '2023-03-06',
        },
        {
            'id': 'homework3',
            'from': 't1',
            'to': 's1',
            'title': 'Example Homework3',
            'description': 'Sed feugiat laoreet mi, sed ornare nibh gravida a.',
            'document': 'some document',
            'date_set': '2023-02-03',
            'due': '2023-02-27',
            'deletion_date': '2023-03-06',
        },
        {
            'id': 'homework4',
            'from': 't1',
            'to': 's1',
            'title': 'Example Homework4',
            'description': 'Phasellus euismod tellus nec ex lobortis, sit amet elementum nisl fermentum.',
            'document': 'some document',
            'date_set': '2023-02-04',
            'due': '2023-02-27',
            'deletion_date': '2023-03-06',
        },
        {
            'id': 'homework5',
            'from': 't1',
            'to': 's1',
            'title': 'Example Homework5',
            'description': 'Nulla nec faucibus mauris, sed vestibulum diam.',
            'document': 'some document',
            'date_set': '2023-02-05',
            'due': '2023-02-27',
            'deletion_date': '2023-03-06',
        },
        {
            'id': 'homework6',
            'from': 't1',
            'to': 's1',
            'title': 'Example Homework6',
            'description': 'Maecenas tristique, odio quis malesuada commodo, sapien orci imperdiet nibh, sed lobortis enim velit quis nisi.',
            'document': 'some document',
            'date_set': '2023-02-06',
            'due': '2023-02-27',
            'deletion_date': '2023-03-06',
        },
        {
            'id': 'homework7',
            'from': 't1',
            'to': 's1',
            'title': 'Example Homework7',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'document': 'some document',
            'date_set': '2023-02-07',
            'due': '2023-02-27',
            'deletion_date': '2023-03-06',
        },
        {
            'id': 'homework8',
            'from': 't1',
            'to': 's1',
            'title': 'Example Homework8',
            'description': 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            'document': 'some document',
            'date_set': '2023-02-08',
            'due': '2023-02-27',
            'deletion_date': '2023-03-06',
        },
        {
            'id': 'homework9',
            'from': 't1',
            'to': 's1',
            'title': 'Example Homework9',
            'description': 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            'document': 'some document',
            'date_set': '2023-02-09',
            'due': '2023-02-31',
            'deletion_date': '2023-03-06',
        },
        {
            'id': 'homework10',
            'from': 't1',
            'to': 's1',
            'title': 'Example Homework10',
            'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            'document': 'some document',
            'date_set': '2023-02-10',
            'due': '2023-02-27',
            'deletion_date': '2023-03-06',
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
        if (orderBy === 'date_set' || orderBy === 'due') {
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
    <Box sx={{ border: '5px solid #04AA6D', overflow: 'auto', height: '300px', width: '735px', resize: 'both', minWidth: '550px', maxWidth: '1000px', minHeight: '300px', maxHeight: '600px' }}>
        <Typography variant="h6" align="center">Homework Centre</Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" stickyHeader sx={{ border: '1px solid gray' }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell sx={column.id !== 'description' ? { width: '200px' } : {width: '500px'}} key={column.id} onClick={() => handleSort(column.id)}>
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

export default HomeworkCentre;