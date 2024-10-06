// add nested file or folder by parent id function
export const addUnderParent = (folders, parentId, newFolder) => {
  return folders.map((folder) => {
    if (folder.id == parentId) {
      return {
        ...folder,
        data: [...folder.data, newFolder],
      };
    }
    if (folder.data && folder.data.length > 0) {
      return {
        ...folder,
        data: addUnderParent(folder.data, parentId, newFolder),
      };
    }
    return folder;
  });
};

// delete file or folder by id 
export const deleteById = (folders, id) => {
  return folders
    .map((folder) => {
      if (folder.id === id) {
        return null;
      }

      if (folder.data && folder.data.length > 0) {
        return {
          ...folder,
          data: deleteById(folder.data, id),
        };
      }
      return folder;
    })
    .filter(Boolean);
};


// rename file or folder by id 
export const renameById = (folders, id, name) => {
    return folders
      .map((folder) => {
        if (folder.id === id) {
           folder.name = name;
          return folder 
        }
  
        if (folder.data && folder.data.length > 0) {
          return {
            ...folder,
            data: renameById(folder.data, id, name),
          };
        }
        return folder;
      })
      .filter(Boolean);
    }  