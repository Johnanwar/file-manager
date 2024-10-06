import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const NoDataComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        width:'100%',
        padding: 4,
      }}
    >
      <Typography sx={{fontSize:'3rem'}} variant="h4" gutterBottom>
        No Data Found
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Start by adding a new file or folder to get started.
      </Typography>
{/* 
      <Stack direction="row" spacing={2} mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={onAddFile}
        >
          Add New File
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={onAddFolder}
        >
          Add New Folder
        </Button>
      </Stack> */}
    </Box>

  );
};

export default NoDataComponent;
