import { Routes, Route } from 'react-router-dom';
import { About, Contact, Main, Testimonials, Works } from '../../prev_pages';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/Works" element={<Works />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Router;
