import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import * as H from 'history';
import MainPageComponent from '../../components/componentWepPage/main';

interface MainPageProps {
  history: H.History;
  // smth props
}

const MainPage: React.FC<MainPageProps> = () => (
  <MainPageComponent />
);


export default MainPage;
/*
<CardItem
          isOpen={isModalOpen}
          price={modalProps.price}
          description={modalProps.description}
          onClose={modalProps.onClose}
          imageUrl={modalProps.imageUrl}
        />
*/
// const [modalProps, setModalProps] = useState({} as any);
// const [isModalOpen, setModalOpen] = useState(false); const handleOpenModal = () => {
//   setModalProps({
//     price: 0,
//     description: 'test',
//     onClose: () => setModalOpen(false),
//     imageUrl: 'https://assets.change.org/photos/9/ti/kt/OZTikTiXHKSEJIl-800x450-noPad.jpg?1549309383',
//   });
//   setModalOpen(true);
// };
