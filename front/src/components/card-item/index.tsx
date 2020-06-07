import React from 'react';
import { Modal, Button, Typography, TextField } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import * as H from 'history';
import './styles.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



export interface CardItemPrpos {
  id: string,
  price: number;
  description: string;
  imageUrl: string;
  isOpen: boolean;
  onClose: (event: any) => void;
}

const deleteItem = (id: string) => {
  fetch(`https://buoyant-habitat-279114.df.r.appspot.com/products/${id}`, {
    method: "DELETE",
  });
};


const CardItem: React.FC<CardItemPrpos> = ({
  id, price, description, imageUrl, isOpen, onClose,
}) => (
    <Modal open={isOpen} onClose={onClose}>
      <div className="card-item">
        <div className="card-item__photo-container">

       


          <Typography className="card-item__photo-text" variant="h5" component="h2">Фото</Typography>
          <img alt="Тут картинка" className="card-item__photo" src={imageUrl} />
        </div>



        <div className="card-item__button-conainer">
         

      <form>
        <TextField
          title={"Description: "}
          rows={1}
          value={"Описание: "+description}
         
          placeholder={"Description: "}
        />
      
      <TextField
          title={"Price: "}
          rows={1}
          value={"Цена: "+price}
         
          placeholder={"Price: "}
        />
      </form>


        <IconButton  
          className="card-item__button"
            onClick={() => deleteItem(id)}
        >
          <DeleteIcon />
        </IconButton>

      
        </div>
      </div>
    </Modal>
  );

export default CardItem;