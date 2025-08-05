import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './pages/Contact.tsx';
import QuoteRequest from './pages/QuoteRequest.tsx';
import Admin from './pages/Admin.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import './App.css';

function App() {
  return (
    <Router basename="/Platinium_Wedding_Care">
      <div className='min-h-screen bg-white text-gray-900 flex flex-col'>
        <Header />

        <motion.main
          className='flex-grow'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/quote' element={<QuoteRequest />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </motion.main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
