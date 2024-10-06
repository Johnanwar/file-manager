"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useParams } from "next/navigation"; 
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NoDataComponent from "@/app/components/No-Data/no-data";
import Item from "@/app/components/Item/Item";

const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  flex: 1,
  flexGrow: 1,
  backgroundColor: "#f5f5f5",
}));

export default function Home() {
  const filesData = useSelector((state) => state.folders);
  const params = useParams(); 
  const { id } = params;  

  const findById = (data, id) => {
    for (const item of data) {
      // Check if the current item has the matching id
      if (item.id === id) {
        return item;
      }
     if (item.data && item.data.length > 0) {
        const found = findById(item.data, id);
        if (found) return found;
      }
    }
    return null;
  };
  const filteredData = findById(filesData.data, id);
   console.log(filteredData);
 

  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {filteredData.data?.length > 0 ? (
          filteredData.data.map((el) => (
            <Item id={el.id} key={el.id} name={el.name} type={el.type} />
          ))
        ) : (
          <NoDataComponent />
        )}
      </Grid>
    </Container>
  );
}
