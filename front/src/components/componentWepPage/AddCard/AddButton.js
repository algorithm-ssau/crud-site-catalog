import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const handleSubmit = (e) => {
  e.preventDefault()
  console.log("formData");
  // ... submit to API or something
};


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Button variant="contained" onClick={handleSubmit}>Add product</Button>
     
 </div>
  );
}
