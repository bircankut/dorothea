import React, {useState} from 'react';
import {DrawingsManager} from '../managers/drawings-manager';

export const defaultGlobal = {
  drawings: {
    store: new DrawingsManager(),
    finished: {},
    isFinished: () => undefined,
    addFinished: () => undefined,
  },
};

export const GlobalContext = React.createContext(defaultGlobal);

export const GlobalContextProvider = ({children}) => {
  const [finishedDrawings, setFinishedDrawings] = useState(
    defaultGlobal.drawings.store.getFinished() || {},
  );

  const addFinishedDrawing = async drawing => {
    drawing.finishTime = new Date().toString();
    const newFinishedDrawings = {...finishedDrawings, [drawing.name]: drawing};
    setFinishedDrawings(newFinishedDrawings);
    await defaultGlobal.drawings.store.setFinished(newFinishedDrawings);
    console.log(defaultGlobal.drawings.store.getFinished());
  };

  const isFinishedDrawing = key => {
    return finishedDrawings.hasOwnProperty(key);
  };

  return (
    <GlobalContext.Provider
      value={{
        drawings: {
          store: defaultGlobal.drawings.store,
          finished: finishedDrawings,
          isFinished: isFinishedDrawing,
          addFinished: addFinishedDrawing,
        },
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
