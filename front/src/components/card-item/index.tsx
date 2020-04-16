import React from 'react';
import { Modal, Button } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import * as H from 'history';
import './styles.scss';

interface CardItemPrpos {
    price: number;
    description: string;
    imageUrl: string;
    isOpen: boolean;
    onClose: (event: any) => void;
}

const CardItem: React.FC<CardItemPrpos> = ({price, description, imageUrl, isOpen, onClose}) => {
  console.log(history);
  return (
    <Modal open={isOpen} onClose={onClose}>
        <div className="card-item">
            <div className="card-item__photo-container">
                <h2 className="card-item__photo-text">Фото</h2>
                <img className="card-item__photo" src={imageUrl} />
            </div>
            <div className="card-item__button-conainer">
                <Button className="card-item__button">Описание</Button>
                <Button className="card-item__button">Удалить</Button>
            </div>
        </div>
    </Modal>
  );
};

export default CardItem;
