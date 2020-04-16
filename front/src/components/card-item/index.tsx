import React from 'react';
import { Modal } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import * as H from 'history';
import './styles.scss';

interface CardItemPrpos {
    price: number;
    description: string;
    imageUrl: string;
    isOpen: boolean;
}

const CardItems: React.FC<CardItemPrpos> = ({price, description}) => {
  console.log(history);
  return (
    <Modal> 
        <Image/>
    </Modal>
  );
};

export default MainPage;
