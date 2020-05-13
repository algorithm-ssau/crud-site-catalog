import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import MediaCard from './card';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  }),
);

export default function SpacingGrid() {
  const [spacing] = React.useState<GridSpacing>(7);
  const classes = useStyles();

  

  return (
    <Grid container className={classes.root} spacing={7}>
      <Grid item xs={12}>
        <Grid container  spacing={spacing}>
       
        <Grid item >
          <Paper className={classes.paper}><MediaCard/></Paper>
        </Grid>

        <Grid item>
          <Paper className={classes.paper}><MediaCard/></Paper>
        </Grid>

        <Grid item>
          <Paper className={classes.paper}><MediaCard/></Paper>
        </Grid>



     


   
        
        </Grid>
      </Grid>
   



    
  


    </Grid>


  );
}
