
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MediaCard from './card';
import React, { useState, useEffect } from 'react';
const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 345,
  },
  control: {
    padding: theme.spacing(7),
  },
}));
export interface GridItem {
  name: string;
  id: number;
}

export default function SpacingGrid({products}:{products:GridItem[]}) {
  
  const [spacing] = React.useState<GridSpacing>(7);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const renderGridItem = (gridItems: GridItem[]) => gridItems.map((gridItem) => (
    <Grid item>
            <Paper className={classes.paper}><MediaCard /></Paper>
          </Grid>
  ));



  return (
    <Grid container className={classes.root} spacing={7}>
      <Grid item xs={12}>
        <Grid container spacing={spacing}>

         {renderGridItem(products)}

        </Grid>
      </Grid>
    </Grid>


  );
}





