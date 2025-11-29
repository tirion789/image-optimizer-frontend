import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import { ModalProvider } from 'contexts/ModalContext';
import { Modal } from 'components/ui/Modal/Modal';

import App from './App';

const rootElem = document.getElementById('root');

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <React.StrictMode>
      <ModalProvider>
        <App />
        <Modal />
      </ModalProvider>
    </React.StrictMode>
  );
}
