import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar'; 
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
); 

reportWebVitals();
