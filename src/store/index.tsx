import React, {createContext, FC, PropsWithChildren, ReactNode, useContext} from 'react';

export const GlobalContext = createContext(null);
export const useStore = () => {
    return useContext(GlobalContext);
}

export const GlobalStore: FC<PropsWithChildren> = ({children}) => {
    return (
        <GlobalContext.Provider value={null}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalStore;