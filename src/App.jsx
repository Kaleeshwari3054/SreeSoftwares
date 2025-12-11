// import React from 'react';
// import './App.css';
// import Hero from './Pages/Hero.jsx';
// import Video from './Pages/Video.jsx';
// import Clients from './Pages/Clients.jsx';
// import Footer from './Pages/Footer.jsx';
// function App() {
//   return (
//     <>
//       <Hero />
//       <Video />
//       <Clients/>
//       <Footer/>
//     </>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hero from './Pages/Hero.jsx';
import Video from './Pages/Video.jsx';
import Clients from './Pages/Clients.jsx';
import Footer from './Pages/Footer.jsx';
import Privacy from './Pages/Privacy.jsx';
import TermsConditions from './Pages/Termsconditions.jsx';
import ScrollToTop from './Pages/ScrollToTop.jsx';
import StatsSection from './Pages/StatsSection.jsx';
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Video />
              <Clients />
              <StatsSection />
              <Footer />
            </>
          }
        />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
      </Routes>
    </>
  );
}

export default App;
