import React, { useContext, createContext, useReducer } from 'react';

import { initialState, appReducer } from './appReducer';

export const AppStore = createContext();

export const useAppStore = () => useContext(AppStore);

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const value = { state, dispatch };

  return (
    <AppStore.Provider value={value}>{children}</AppStore.Provider>
  );
}
