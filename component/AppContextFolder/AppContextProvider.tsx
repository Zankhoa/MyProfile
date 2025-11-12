'use client';
import React, {ReactNode, useState, useMemo} from 'react';
import AppContext from './AppContent';

export default function AppContextProvider({ children }: { children: ReactNode }) {
  const [sharedState, setSharedState] = useState({
    portfolio:{
      NavBar:{
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling:{
        IntervalEvent: null,
      },
    },
    finishedLoading: false,
  });
  const value = useMemo(() => ({ sharedState, setSharedState }), [sharedState]);
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

