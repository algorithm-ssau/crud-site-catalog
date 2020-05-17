
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { useState, useEffect } from 'react';
import MediaCard from './card';
import { CardItem } from '..';

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
  id: string;
  name: string,
  price: number;
  description: string;
  imagePath: string;
}

export default function SpacingGrid({ products }: { products: GridItem[] }) {
  const [spacing] = React.useState<GridSpacing>(7);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [modalProps, setModalProps] = useState({} as any);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = (item: GridItem) => {
    setModalProps({
      price: item.price,
      description: item.description,
      onClose: () => setModalOpen(false),
      imageUrl:
        "https://assets.change.org/photos/9/ti/kt/OZTikTiXHKSEJIl-800x450-noPad.jpg?1549309383",
    });
  setModalOpen(true);
};


  const renderGridItem = (gridItems: GridItem[]) =>
    gridItems.map((gridItem) => (
      <Grid item>
        <Paper className={classes.paper} onClick={() => handleOpenModal(gridItem)}>
          <MediaCard />
        </Paper>
      </Grid>
    ));


  return (
    <>
      <CardItem
            isOpen={isModalOpen}
            price={modalProps.price}
            description={modalProps.description}
            onClose={modalProps.onClose}
            imageUrl={modalProps.imageUrl}
      />
      
    <Grid container className={classes.root} spacing={7}>
      <Grid item xs={12}>
        <Grid container spacing={spacing}>
          

          {renderGridItem(products)}
        </Grid>
      </Grid>
      </Grid>
      </>
  );
}
