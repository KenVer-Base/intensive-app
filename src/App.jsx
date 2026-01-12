import React, { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Programs from './components/programs';
import Tutors from './components/tutors';
import Location from './components/location';
import Footer from './components/footer';
import RegisterModal from './components/registermodal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRegister = () => setIsModalOpen(true);
  const closeRegister = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onOpenRegister={openRegister} />
      <Hero onOpenRegister={openRegister} />
      <Programs />
      <Tutors />
      <Location />
      <Footer />
      <RegisterModal isOpen={isModalOpen} onClose={closeRegister} />
    </>
  );
}

export default App;