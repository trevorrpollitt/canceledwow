import React from 'react';
import Topbar from './components/Topbar.jsx';
import Hero from './components/Hero.jsx';
import Teams from './components/Teams.jsx';
import Rules from './components/Rules.jsx';
import Links from './components/Link.jsx';
import Join from './components/Join.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Topbar />
      <Hero />
      <Teams />
      <Rules />
      <Links />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
