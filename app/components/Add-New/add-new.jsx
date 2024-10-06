import React from 'react'

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useState } from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import { useDispatch } from 'react-redux';
import { uid } from 'uid';
import { addNestedFolder, addNewFileOrFolder } from '@/app/redux/reducer/folders.reducer';
import { useParams } from "next/navigation";

const actions = [
  { icon: <FolderIcon />, name: 'Create a new folder', type:'folder' },
  { icon: <InsertDriveFileIcon />, name: 'Create a new file', type:'file' },
];


const AddNew = ()=> {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const params = useParams(); 
     const { id } = params;
     console.log(id, 'id from lyout')


     const handleAddFileOrFolder =(type)=>{
        if(id){
            dispatch(addNestedFolder({
                parentId:id,
                newFolder :{
                id:uid(),
                type,
                name :type === 'file' ? 'New File' : 'New Folder'  ,
                data: type === 'file' ? null : []
              }
              }))

        }
        else{
        dispatch(addNewFileOrFolder({
          id:uid(),
          type,
          name :type === 'file' ? 'New File' : 'New Folder'  ,
          data: type === 'file' ?null : []
        }))
     }
        handleClose ()
     }
  return (
    <SpeedDial
    ariaLabel="SpeedDial controlled open example"
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
    icon={<SpeedDialIcon />}
    onClose={handleClose}
    onOpen={handleOpen}
    open={open}
  >
    {actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        onClick={()=>handleAddFileOrFolder(action.type)}
      />
    ))}
  </SpeedDial>
  )
}

export default AddNew
