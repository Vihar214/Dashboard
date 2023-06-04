import React from 'react';
import { Box , useTheme } from '@mui/material';
import { useGetCustomersQuery } from 'state/api';
import Header from 'components/Header';
import { DataGrid } from '@mui/x-data-grid';

function Customers() {
  const theme = useTheme();
  const {data , isLoading} = useGetCustomersQuery();
  const columns = [
    {
        field: "_id",
        headerName: "User ID",
        flex: 1,
    },
    {
        field: "name",
        headerName: "Name",
        flex: 0.5,
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1,
    },
    {
        field: "phoneNumber",
        headerName: "Phone Number",
        flex: 0.5,
        renderCell: (params) => {
            return params.value.replace(/^(\d{5})(\d{5})/,"+91 $1 $2")
        }
    },
    {
        field: "country",
        headerName: "Country",
        flex: 0.4,
    },
    {
        field: "occupation",
        headerName: "Occupation",
        flex: 1,
    },
    {
        field: "role",
        headerName: "Role",
        flex: 1,
    }
  ];

  return (
    <Box m="1.5rem 2.5rem" >
        <Header title = "CUSTOMERS" subtitle="List of Customers"/>
        <Box
            mt = "20px"
            height="75vh"
            sx={{
                "& .MuiDataGrid-root":{
                    border: "none"
                },
                "& .MuiDataGrid-cell":{
                    borderBottom: "none"   
                },
                "& .MuiDataGrid-columnHeaders":{
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor: theme.palette.primary.light,
                },
                "& .MuiDataGrid-footerContainer":{
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.secondary[100],
                    borderTop: "none"
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                    Color: `${theme.palette.secondary[200]} !important`
                }
            }}
        >
            <DataGrid
                loading={isLoading || !data}
                rows={data || []}
                getRowId={(row) => row._id}
                columns={columns}
            />
        </Box>
    </Box>
  )
}

export default Customers