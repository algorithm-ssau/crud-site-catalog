import React from 'react';

export interface CatalogContextProps {
    state: any[] | undefined;
    updateCatalogs: Function;
}

export default React.createContext<CatalogContextProps>({} as CatalogContextProps);
