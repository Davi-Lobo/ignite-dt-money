import React from 'react';
import ReactDOM from 'react-dom/client';

import { createServer } from 'miragejs';
import { App } from './App';

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return [
                {
                    id: 1,
                    title: 'Transação 01',
                    amount: 350,
                    type: 'deposit',
                    category: 'Food',
                    createdAt: new Date()
                }
            ]
        })
    }
})

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(<App />);