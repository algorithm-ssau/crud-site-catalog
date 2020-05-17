import React, { useState, useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import * as H from 'history';
import { useHistory, useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import MainPageComponent, { ListItem } from '../../components/componentWepPage/main';
import CatalogsContext, { CatalogContextProps } from '../LoadingPage/catalogsContext';

interface MainPageProps {
  history: H.History;
  // smth props
}


const MainPage: React.FC<MainPageProps> = () => {
  const history = useHistory();
  const { id } = useParams();

  const goToCategory = (idCategory: number) => {
    history.push(`${idCategory}`);
  };

  const catalogs = useContext<CatalogContextProps>(CatalogsContext).state ?? [];

  if (!catalogs?.length) {
    history.push('/');
  }

  return (
    <MainPageComponent dataListItem={catalogs} changeLocation={goToCategory} id={id} />
  );
};


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
