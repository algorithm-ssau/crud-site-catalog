import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import {
  makeStyles, useTheme, Theme, createStyles,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';
import { GridSpacing } from '@material-ui/core';
import Tittle from './tittle';
import Example, { GridItem } from './images';
import AddCard from './Form/FormContainer';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export interface ListItem {
  name: string;
  id: string;
  description: string;
  products: any[];
}


// eslint-disable-next-line max-len
export default function MainPageComponent({ id, dataListItem, changeLocation }:
  {
    id: string | undefined,
    dataListItem: ListItem[],
    changeLocation: Function,

  }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [productsItems, setProductItems] = useState<GridItem[]>([]); // Просто надо будет замапить
  const [categoryItem, setCategoryItem] = useState<ListItem>();
  const [anchorEl, setAnchorEl] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const loadCurrentCatalog = async (catalogId: string) => {
    const response = await fetch(`/category/${catalogId}`);
    const json = await response.json();
    setProductItems(
      json.products.map((producsItem: any) => ({
        ...producsItem,
        id: producsItem._id,
        imagePath: 'https://assets.change.org/photos/9/ti/kt/OZTikTiXHKSEJIl-800x450-noPad.jpg?1549309383',
      })),
    );
  };


  useEffect(() => {
    if (!id) return;
    loadCurrentCatalog(id);
    setCategoryItem(dataListItem.find((categoryId) => categoryId.id === id));
  }, [id]);


  const renderListItem = (listItems: ListItem[]) => listItems.map((listItem) => (
    <ListItem button>
      <ListItemText onClick={() => changeLocation(listItem.id)} primary={listItem.name} />
    </ListItem>
  ));


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List component="nav" aria-label="main mailbox folders">
          {renderListItem(dataListItem)}
        </List>


        <Divider />
        <List component="nav" aria-label="main mailbox folders">
       
       <ListItem button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      Add Product
     </ListItem>
     <Menu
       id="simple-menu"
      //anchorEl={anchorEl}
       keepMounted
       open={Boolean(anchorEl)}
       onClose={handleClose}
     >
       <MenuItem><AddCard/></MenuItem>
      
     </Menu>


     
   
       </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Tittle name={categoryItem?.name} description={categoryItem?.description} />

        <Example products={productsItems} />


      </main>
    </div>
  );
}
