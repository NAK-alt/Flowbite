import React from 'react'
import NavBar from './Components/NavBar.Jsx'
import Footer from './Components/Footer.Jsx'
import Gallery from './Components/Gallery'


const App = () => {
  return (
    <>
      <nav>
      <NavBar></NavBar>
      </nav>
        
        <main>
        <Gallery></Gallery>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
        
    </>
  )
}

export default App
