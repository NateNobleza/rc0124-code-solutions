import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Catalog />} />
        <Route path="details/:productId" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
