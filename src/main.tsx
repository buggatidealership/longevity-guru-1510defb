
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root element and render app
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(<App />);
