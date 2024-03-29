import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { Header } from './components/Header';
import AppDrawer from './components/AppDrawer';

const menuItems = [
  { name: 'About', icon: 'hylian-emblem.svg', path: '/about' },
  { name: 'Catalog', icon: 'catalog.png', path: '/' },
];

export function App() {
  return (
    <div className="app">
      <Header />
      <AppDrawer menuItems={menuItems} />
      <Routes>
        <Route index element={<Catalog />} />
        <Route path="details/:productId" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
