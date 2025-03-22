
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root element and render app
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

// Add a link to the sitemap in the document head
const sitemapLink = document.createElement('link');
sitemapLink.rel = 'sitemap';
sitemapLink.type = 'application/xml';
sitemapLink.href = '/sitemap.xml';
document.head.appendChild(sitemapLink);

createRoot(rootElement).render(<App />);
