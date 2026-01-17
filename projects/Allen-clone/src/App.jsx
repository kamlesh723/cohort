import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/Footer'
import Hero from './components/hero/Hero';


function App() {
  return (
    <>
      <Header>
        <main style={{minHeight:"80vh"}}>
          {/* containt will come later */}
        </main>
      </Header>
      <Hero />
      <Footer></Footer>
    </> 
  );
}

export default App
