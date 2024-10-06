import { addUnderParent, deleteById, renameById } from "@/app/helpers";
import { createSlice } from "@reduxjs/toolkit";


const foldersSlice = createSlice({
  name: "folders",
  initialState: {
    data: [
      {"id": "2e6d56334f7c87","type": "folder","name": "New Folder1" , data:[
      {"id": "2e6d56eef7c87","type": "folder","name": "New Folder2", data:[
        {"id": "2e6d56457c87","type": "folder","name": "New Folder3", data:[
        {"id": "2e6d56rr4555rf7c87","type": "folder","name": "New Folder4", data:[]},
        {"id": "2e6d56rr4555rfdd7c87","type": "folder","name": "New Folder5", data:[]},
        {"id": "2e6d56rr4555reef7c87","type": "folder","name": "New Folder6", data:[]},
        ]},
        {"id": "2e6d56rr4555rf7c87","type": "folder","name": "New Folder7", data:[]},
  
        ]},
      {"id": "2e6d56rrrf7c87","type": "folder","name": "New Folder8", data:[]},

      ]},
      {"id": "2e6d585776f7c87","type": "folder","name": "New Folder9", data:[]},
    ],
  },
  reducers: {
    addNewFileOrFolder: (state, action) => {
      state.data.push(action.payload);
    },

    renameFile: (state, action) => {
      state.data = renameById(state.data, action.payload?.id, action.payload.name);
    },

    deleteFile: (state, action) => {
      state.data = deleteById(state.data, action.payload?.id);
    },

    addNestedFolder: (state, action) => {
      const { parentId, newFolder } = action.payload;
      state.data = addUnderParent(state.data, parentId, newFolder);
    }
  },
});

export const { addNewFileOrFolder, addNestedFolder, renameFile, deleteFile } =
  foldersSlice.actions;
export default foldersSlice.reducer;
