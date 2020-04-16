import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import * as H from 'history';
import './styles.scss';
import { Button } from '@material-ui/core';
import { CardItem } from '../../components';

interface MainPageProps {
    history: H.History;
    // smth props
}

const MainPage: React.FC<MainPageProps> = ({ history }: MainPageProps) => {
  const [modalProps, setModalProps] = useState({} as any);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalProps({
      price: 0,
      description: 'test',
      onClose: () => setModalOpen(false),
      imageUrl: 'https://assets.change.org/photos/9/ti/kt/OZTikTiXHKSEJIl-800x450-noPad.jpg?1549309383',
    });
    setModalOpen(true);
  };
  // console.log(modalProps);
  return (
    <div>
      <p>
        Это просто пока залушка
        <Button onClick={handleOpenModal}>Открыть модалку</Button>
      </p>
      <p>
        <CardItem
          isOpen={isModalOpen}
          price={modalProps.price}
          description={modalProps.description}
          onClose={modalProps.onClose}
          imageUrl={modalProps.imageUrl}
        />
      </p>
    </div>
  );
};

export default MainPage;
