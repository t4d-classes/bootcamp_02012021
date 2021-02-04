import { createContext, useContext } from 'react';

const colorToolStoreContext = createContext();

export const ColorToolStoreProvider = props => {
  return (
    <colorToolStoreContext.Provider value={props.colorToolStore}>
      {props.children}
    </colorToolStoreContext.Provider>
  );
};

export const useColorToolStoreContext = () => {
  return useContext(colorToolStoreContext);
};
