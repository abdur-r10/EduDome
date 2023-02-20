import React from 'react'
// import TableSortLabel from "@mui/material"
// import { Table } from "@mui/material";
// import { TableBody } from "@mui/material";
// import { TableCell } from "@mui/material";
// import { TableContainer } from "@mui/material";
// import { TableHead } from "@mui/material";
// import { TableRow } from "@mui/material";
// import { TablePagination } from "@mui/material";
// import { TableFooter } from '@mui/material'
// import { Paper } from "@mui/material";
// import { Typography } from '@mui/material'
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material';


/* 
homeworkData = {{
    id: 'homework1'
    from: t1
    to: s1
    title: 'Example Homework1'
    description: 'complete the document attached'
    document: 'some document'
    date set: 2023-02-20
    due: 2023-02-27
    deletion date: 2023-03-06
},
{
    id: 'homework1'
    from: t1
    to: s1
    title: 'Example Homework2'
    description: 'complete the document attached'
    document: 'some document'
    date set: 2023-02-20
    due: 2023-02-27
    deletion date: 2023-03-06
},
{
    id: 'homework1'
    from: t1
    to: s1
    title: 'Example Homework3'
    description: 'complete the document attached'
    document: 'some document'
    date set: 2023-02-20
    due: 2023-02-27
    deletion date: 2023-03-06
},
{
    id: 'homework1'
    from: t1
    to: s1
    title: 'Example Homework4'
    description: 'complete the document attached'
    document: 'some document'
    date set: 2023-02-20
    due: 2023-02-27
    deletion date: 2023-03-06
}}



key display date set, hw heading, hw description, documents attached, date due
*/

const homeworkStyle = {
    'padding': '20px',
    'margin': '20px',
    'background-color': '#04AA6D',
    'color': 'white',
}

const data = [
    {
        'id': 'homework1',
        'from': 't1',
        'to': 's1',
        'title': 'Example Homework1',
        'description': 'complete the document attached',
        'document': 'some document',
        'date_set': '2023-02-20',
        'due': '2023-02-27',
        'deletion_date': '2023-03-06',
    },
    {
        'id': 'homework2',
        'from': 't1',
        'to': 's1',
        'title': 'Example Homework2',
        'description': 'complete the document attached',
        'document': 'some document',
        'date_set': '2023-02-20',
        'due': '2023-02-27',
        'deletion_date': '2023-03-06',
    },
    {
        'id': 'homework3',
        'from': 't1',
        'to': 's1',
        'title': 'Example Homework3',
        'description': 'complete the document attached',
        'document': 'some document',
        'date_set': '2023-02-20',
        'due': '2023-02-27',
        'deletion_date': '2023-03-06',
    },
    {
        'id': 'homework4',
        'from': 't1',
        'to': 's1',
        'title': 'Example Homework4',
        'description': 'complete the document attached',
        'document': 'some document',
        'date_set': '2023-02-20',
        'due': '2023-02-27',
        'deletion_date': '2023-03-06',
    },
    {
        'id': 'homework5',
        'from': 't1',
        'to': 's1',
        'title': 'Example Homework5',
        'description': 'complete the document attached',
        'document': 'some document',
        'date_set': '2023-02-20',
        'due': '2023-02-27',
        'deletion_date': '2023-03-06',
    },
    {
        'id': 'homework6',
        'from': 't1',
        'to': 's1',
        'title': 'Example Homework6',
        'description': 'complete the document attached',
        'document': 'some document',
        'date_set': '2023-02-20',
        'due': '2023-02-27',
        'deletion_date': '2023-03-06',
    },
    {
        'id': 'homework7',
        'from': 't1',
        'to': 's1',
        'title': 'Example Homework7',
        'description': 'complete the document attached',
        'document': 'some document',
        'date_set': '2023-02-20',
        'due': '2023-02-27',
        'deletion_date': '2023-03-06',
    },
    {
        'id': 'homework8',
        'from': 't1',
        'to': 's1',
        'title': 'Example Homework8',
        'description': 'complete the document attached',
        'document': 'some document',
        'date_set': '2023-02-20',
        'due': '2023-02-27',
        'deletion_date': '2023-03-06',
    },
    {
        'id': 'homework9',
        'from': 't1',
        'to': 's1',
        'title': 'Example Homework9',
        'description': 'complete the document attached',
        'document': 'some document',
        'date_set': '2023-02-20',
        'due': '2023-02-27',
        'deletion_date': '2023-03-06',
    },
    {
        'id': 'homework10',
        'from': 't1',
        'to': 's1',
        'title': 'Example Homework10',
        'description': 'complete the document attached',
        'document': 'some document',
        'date_set': '2023-02-20',
        'due': '2023-02-27',
        'deletion_date': '2023-03-06',
    }]


const HomeworkCentre = () => {


    //date set, hw title, hw description, documents attached, date due
    const columns = [
        {   
            field: 'date_set', 
            headerName: 'Date Set', 
            type: 'date',
            width: 150,
            headerAlign: 'center',
            align: 'center',
            wrap: true
        },
        {
            field: 'title',
            headerName: 'Title',
            sortable: false,
            width: 150,
            headerAlign: 'center',
            align: 'center',
            wrap: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            sortable: false,
            width: 150,
            headerAlign: 'center',
            align: 'center',
            wrap: true,
        },
        {
            field: 'document',
            headerName: 'Documents',
            sortable: false,
            width: 150,
            headerAlign: 'center',
            align: 'center',
            wrap: true
        },
        {
            field: 'due',
            headerName: 'Date Due',
            type: 'date',
            width: 150,
            headerAlign: 'center',
            align: 'center',
            wrap: true
        }
    ]


    return (
        <Box sx={{border: '5px solid #04AA6D', overflow: 'auto', height: '322px', width: '800px'}}>
            <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            columnBuffer={10}
            sx={{ flexWrap: 'nowrap' }}
          />
        </Box>
  )
}

export default HomeworkCentre

//! Pagination
//! Sorting
//!!!!!!USE TABLE RATHER THAN DATAGRID

/*
<TableContainer component={Paper}>
     <Table aria-label="simple table" stickyHeader>
       <TableHead>
         <TableRow>
           <TableCell>Date Set</TableCell>
           <TableCell align="left">From</TableCell>
           <TableCell align="right">Title</TableCell>
           <TableCell align="right">Description</TableCell>
           <TableCell align="right">Documents</TableCell>
           <TableCell align="right">Date Due</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {data.map((row) => (
           <TableRow key={row.id} style={homeworkStyle}>
             <TableCell component="th" scope="row" sortDirection={orderBy === headCell.id ? order : 'asc'}>
               {row.date_set}
             </TableCell>
             <TableCell align="left">{row.from}</TableCell>
             <TableCell align="right">{row.title}</TableCell>
             <TableCell align="right">{row.description}</TableCell>
             <TableCell align="right">{row.document}</TableCell>
             <TableCell align="right">{row.due}</TableCell>
           </TableRow>
         ))}
       </TableBody>

       <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[4,8, { value: -1, label: 'All' }]}
              colSpan={3}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
     </Table>
   </TableContainer>
*/