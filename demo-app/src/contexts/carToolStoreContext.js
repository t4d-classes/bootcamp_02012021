import { createContext, useContext } from 'react';

const carToolStoreContext = createContext();

export const CarToolStoreProvider = props => {
  return (
    <carToolStoreContext.Provider value={props.carToolStore}>
      {props.children}
    </carToolStoreContext.Provider>
  );
};

export const useCarToolStoreContext = () => {
  return useContext(carToolStoreContext);
};
