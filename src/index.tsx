import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import Main from './components/views/main';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Main/>
    </React.StrictMode>
);
