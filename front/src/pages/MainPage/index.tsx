import React from 'react';
// eslint-disable-next-line no-unused-vars
import * as H from 'history';
import './styles.scss';

interface MainPageProps {
    history: H.History;
    // smth props
}

const MainPage: React.FC<MainPageProps> = ({ history }: MainPageProps) => {
  console.log(history);
  return (
    <div>
      <p>
        Это просто пока залушка
      </p>
      <p>
        {history.location.pathname}
      </p>
    </div>
  );
};

export default MainPage;
