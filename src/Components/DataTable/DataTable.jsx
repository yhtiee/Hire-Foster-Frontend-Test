import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './dataTable.css';
import { useGetAllUsersQuery } from '../../StateManagement/apiSlice';
import { useNavigate } from 'react-router-dom';



const DataTable = () => {
  const { data, isLoading } = useGetAllUsersQuery();
  const navigate = useNavigate();

  const handleCellClick = (params, event) => {
    if (params.field === 'fullName') {
      const id = params.row.id;
      const userData = data.results.map((item, index) => ({ ...item, id: index + 1 })).find((user) => user.id === id);
      navigate('/details', { state: { data: userData } });
      console.log(userData)
    }
  };

  const columns = [
    {
      field: 'fullName',
      headerName: 'Full Name',
      width: 200,
      valueGetter: (params) =>
        `${params.row.name.first} ${params.row.name.last}`,
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 200,
      valueGetter: (params) => params.row.location.country,
    },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'phone', headerName: 'Phone Number', width: 120 },
  ];

  const rows =
    data && data.results
      ? data.results.map((item, index) => ({ ...item, id: index + 1 }))
      : [];

  return (
    <div className="container user__table">

      <h3>User List</h3>
      <div style={{ height: 400, width: '100%' }}>
            <DataGrid
            loading={isLoading || !data.results}
            getRowId={(row) => row.id}
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            onCellClick={handleCellClick}
            sx={{"& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#5CC4A8",
                color: "white",
                }, 
                "& .MuiDataGrid-footerContainer": {
                backgroundColor: "whitesmoke",
                color: "white",
                },
                "& .MuiDataGrid-cell": {
                cursor : "pointer",
                },
                }}/>
      </div>
    </div>
  );
};

export default DataTable;
