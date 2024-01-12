import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import ShoppingCartProvider from './components/ShoppingCartContext/ShoppingCartProvider.jsx'
import { SupabaseProvider } from './components/SupabaseContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <SupabaseProvider>
            <ShoppingCartProvider>
                <App />
            </ShoppingCartProvider>
        </SupabaseProvider>
    </React.StrictMode>,
)
