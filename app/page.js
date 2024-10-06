"use client";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import NoDataComponent from './components/No-Data/no-data';
import Item from './components/Item/Item';





const Container = styled(Box)(({ theme }) => ({ 
  padding: theme.spacing(2),
  flex: 1,
  flexGrow: 1,
  backgroundColor: '#f5f5f5',
 }));


export default function Home() {
  const filesData = useSelector(state => state.folders);
  console.log(filesData.data, "filesData")

  return (
    <Container sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
    {filesData.data?.length > 0 ? filesData.data.map((el)=>(
      <Item id={el.id} key={el.id} name={el.name} type={el.type}/>
    )) : <NoDataComponent/>}

 
    </Grid>
  </Container>
  );
}
