// filepath: rehan-portfolio/src/App.jsx

import { Navbar, Footer, Home, About, Projects, Skills, Resume, Contact } from "./components/index"
// ...existing code...
function App() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Changed to dark theme */}
      <Navbar />
      <main className="flex-grow pt-20">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App