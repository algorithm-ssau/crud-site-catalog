import React from 'react';
import { Modal, Button, Typography } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import * as H from 'history';
import './styles.scss';

export interface CardItemPrpos {
  id: string,
  price: number;
  description: string;
  imageUrl: string;
  isOpen: boolean;
  onClose: (event: any) => void;
}

const deleteItem = (id: string) => {
  fetch(`/products/${id}`, { method: 'DELETE' });
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
          <Button
            variant="contained"
            color="primary"
            className="card-item__button"
          >
            Описание
        </Button>
          <Button
            variant="contained"
            color="primary"
            className="card-item__button"
            onClick={() => deleteItem(id)}
          >
            Удалить

        </Button>
        </div>
      </div>
    </Modal>
  );

export default CardItem;
