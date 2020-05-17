/* eslint-disable */
import React, { useContext } from 'react';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import CatalogsContext, { CatalogContextProps } from './catalogsContext';


const LoadingPage = () => {
    const context = useContext<CatalogContextProps>(CatalogsContext);
    const catalogs = context.state;
    if (catalogs) {
        const history = useHistory();
        history.push(`/${catalogs[0].id}`);
    }

    context.updateCatalogs();

    return (
        <Grid
            item
            xs={4}
            style={{
                justifyItems: 'center', alignContent: 'center', color: 'grey', height: '100vh',
            }}
        >
            <span>Загрузка...</span>
        </Grid>
    );
};

export default LoadingPage;