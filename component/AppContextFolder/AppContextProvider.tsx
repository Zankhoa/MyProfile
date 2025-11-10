'use client';
import React, {ReactNode, useState, useRef, useMemo} from 'react';
import AppContext, {SharedState} from './AppContent';

export default function AppContextProvider({ children }: { children: ReactNode }) {
  const [sharedState, setSharedState] = useState<SharedState>({
    finishedLoading: false,
  });

  const value = useMemo(() => ({ sharedState, setSharedState }), [sharedState]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

