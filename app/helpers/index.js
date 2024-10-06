// add folder function
export const addFolderToParent = (folders, parentId, newFolder) => {
    return folders.map(folder => {
      if (folder.id == parentId) {  
        return {
          ...folder,
          data: [...folder.data, newFolder] 
        };
      }
      if (folder.data && folder.data.length > 0) {
        return {
          ...folder,
          data: addFolderToParent(folder.data, parentId, newFolder)
        };
      }
      return folder;
    });
  };

  export const deleteFolderById = (folders, folderId) => {
    return folders
      .map(folder => {
        if (folder.id === folderId) {
          return null;
        }
  
        if (folder.data && folder.data.length > 0) {
          return {
            ...folder,
            data: deleteFolderById(folder.data, folderId) 
          };
        }
          return folder;
      })
      .filter(Boolean);
  };
  