import { styled } from "@mui/material/styles";
import { Typography, IconButton } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { deleteFile, renameFile } from "@/app/redux/reducer/folders.reducer";
import Link from 'next/link';

const FileContainer = styled(Grid)(({ theme, selected }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: theme.spacing(2),
  userSelect: "none",
  alignItems: "center",
  padding: "20px",
  borderRadius: theme.spacing(2),
  backgroundColor: selected ? "#1976d2" : "transparent",
  color: selected ? "white" : "#333",
  transition: "background-color 0.3s ease, color 0.3s ease",
  position: "relative",
  "&:hover": {
    backgroundColor: selected ? "#135ba1" : "#f0f0f0",
    "& .deleteIcon": {
      opacity: 1, 
    },
  },
  "& svg": {
    fill: selected ? "white" : "#bdbdbd",
    transition: "fill 0.3s ease",
  },
}));

// Centralize item icon styles with responsive size handling
const ItemIconStyles = {
  width: "120px",
  height: "120px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

// Folder and File icon styles
const Folder = styled(FolderIcon)(({ theme }) => ({
  cursor: "pointer",
  ...ItemIconStyles,
}));

const File = styled(InsertDriveFileIcon)(({ theme }) => ({
  ...ItemIconStyles,
}));

const Name = styled(Typography)(({ theme, state }) => ({
  width: "100%",
  outline: "none",
  border: "0.5px solid transparent",
  padding: theme.spacing(1),
  textAlign: "center",
  cursor: state === "error" ? "default" : "text",
  borderRadius: theme.spacing(1),
  color: state === "error" ? "#ff1744" : "inherit",
  "&[contentEditable='true']:focus": {
    outline: "none",
    border: `0.5px solid ${state === "error" ? "#ff1744" : "#1976d2"}`,
    borderRadius: theme.spacing(0.5),
    backgroundColor: "#e3f2fd",
  },
  "&:hover": {
    backgroundColor: "#f0f0f0",
    borderRadius: theme.spacing(0.5),
  },
}));

// IconContainer with consistent spacing and alignment
const IconContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  width: "100%",
  height: 120,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
}));

// Style for the delete icon that only shows on hover
const DeleteIconButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  opacity: 0, // Hidden by default
  transition: "opacity 0.3s ease",
  "&:hover": {
    color: theme.palette.error.main,
  },
}));

export default function Item({ type, name, id, onDelete }) {
  const dispatch = useDispatch();

  const handleRename = (name, id) => {
    dispatch(
      renameFile({
        id,
        name,
      })
    );
  };
  const handleDelete = (id) => {
    dispatch(
      deleteFile({
        id,
      })
    );
  };


  return (
    <FileContainer size={{ xs: 6, md: 3, lg: 2 }}>
      {/* Delete Icon that appears on hover */}
      <DeleteIconButton className="deleteIcon" onClick={() => handleDelete(id)}>
        <DeleteIcon sx={{color:'red'}} />
      </DeleteIconButton>

      <IconContainer>
        {type === "folder" ? (
          <Link href={`/folders/${id}`}>
           <Folder color="info" />
          </Link>
        ) : (
          <File color="disabled" />
        )}
      </IconContainer>

      <Name
        state={""}
        contentEditable={true}
        onInput={(e) => {
          console.log(e.target.innerText);
        }}
        onBlur={(e) => handleRename(e.target.innerText, id)}
      >
        {name}
      </Name>
    </FileContainer>
  );
}
