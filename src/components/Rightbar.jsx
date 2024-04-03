import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar, GridToolbarExport } from '@mui/x-data-grid';
import React, { useState, useEffect } from 'react';

const columns = [
  { field: 'ID', headerName: 'ID', width: 30 },
  { field: 'PointID', headerName: 'Point ID', width: 30, editable: true },
  { field: 'PointName', headerName: 'Point Name', width: 250, editable: true },
  { field: 'Value', headerName: 'Value', type: 'number', width: 90, editable: true },
  { field: 'TimeStamp', headerName: 'Timestamp', width: 200, editable: true },
];

const Rightbar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/locationdatapoints');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
  
        if (Array.isArray(responseData)) {
          const dataWithIds = responseData.map((row, index) => ({
            ...row,
            id: row.ID || index + 1, 
          }));
          console.log("DATA WITH IDS---------")
          console.log(dataWithIds)
          setData(dataWithIds);
        } else {
          throw new Error('Response data is not an array');
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <Box bgcolor="#FFFFFF" flex={3} p={8} sx={{ display: { xs: 'none', sm: 'block' } }}>
      LocationDataPointsDataHistory
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        components={{
          Toolbar: CustomToolbar
        }}
        componentsProps={{
          toolbar: {
            printOptions: { disableToolbarButton: true },
          },
        }}
      />
    </Box>
  );
};

const CustomToolbar = ({ handleExportCsv }) => {
  return (
    <GridToolbar>
      <Button variant="contained" onClick={handleExportCsv}>
        Export CSV
      </Button>
    </GridToolbar>
  );
};

export default Rightbar;
