import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import App2 from '../App2.jsx';

createRoot(document.getElementById('root')).render(
    <App2 />
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>
)
