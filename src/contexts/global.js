import React, {useEffect, useState} from 'react';
import {DrawingsManager} from '../managers/drawings-manager';
import {UserManager} from '../managers/user-manager';

export const defaultGlobal = {
  drawings: {
    store: new DrawingsManager(),
    finished: {},
    isFinished: () => undefined,
    addFinished: () => undefined,
  },
  user: {
    store: new UserManager(),
    data: {},
    setUser: () => undefined,
  },
};

export const GlobalContext = React.createContext(defaultGlobal);

export const GlobalContextProvider = ({children}) => {
  const [finishedDrawings, setFinishedDrawings] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchFinishedDrawings = async () => {
      setFinishedDrawings(
        (await defaultGlobal.drawings.store.getFinished()) || {},
      );
    };
    fetchFinishedDrawings();

    const fetchUser = async () => {
      setUser((await defaultGlobal.user.store.getUser()) || {});
    };
    fetchUser();
  }, []);

  const addFinishedDrawing = async drawing => {
    drawing.finishTime = new Date().toString();
    const newFinishedDrawings = {...finishedDrawings, [drawing.name]: drawing};
    setFinishedDrawings(newFinishedDrawings);
    console.log(newFinishedDrawings);
    await defaultGlobal.drawings.store.setFinished(newFinishedDrawings);
    console.log(newFinishedDrawings);
  };

  const setUserData = async user => {
    user.updateTime = new Date().toString();
    setUser(user);
    await defaultGlobal.user.store.setUser(user);
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
        user: {
          store: defaultGlobal.user.store,
          setUser: setUserData,
          data: user,
        },
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
