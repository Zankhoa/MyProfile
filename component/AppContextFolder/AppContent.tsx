import {createContext, useContext} from 'react'

//type IntervalId = number | null;
 
//define type data structure for shared state
export type SharedState = {
    // portfolio: {
        finishedLoading: boolean;
    //}
}

//define type data structure all in appcontext
export type AppContextType = {
    sharedState: SharedState;
    setSharedState: React.Dispatch<React.SetStateAction<SharedState>>;
}


const AppContext = createContext<AppContextType | null>(null);
export default AppContext;

export function useAppContext() : AppContextType {
const context = useContext(AppContext);
if(!context) {
throw new Error("useAppContext must be used within an AppContextProvider");
}
return context;
}
