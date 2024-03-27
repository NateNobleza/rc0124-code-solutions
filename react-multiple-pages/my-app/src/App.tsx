import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';

export function App() {
  const handleDone = () => {};
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Dashboard />} />
        <Route path="details/:itemId" element={<Details />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound onDone={handleDone} />} />
      </Route>
    </Routes>
  );
}
