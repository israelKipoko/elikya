import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './sections/Header'
import Main from './sections/Main'
import Services from './sections/Services'
import WhyChooseUs from './sections/whychooseus'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ContactPage from './pages/Contact'
import ServicesPage from './pages/Services'

function AppContent() {

  return (
    <div className="relative min-h-screen">
      {/* Background Decor */}
      <div className="fixed inset-0 tech-grid pointer-events-none"></div>
      <div className="fixed inset-0 glow-spotlight pointer-events-none "></div>

      {/* Floating Shapes */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-primary rounded-full floating-shape pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-400 rounded-full floating-shape pointer-events-none"></div>

      {/* Navigation */}
      <Header />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={
          <>
            {/* Main Section */}
            <div className=''>
              <Main/>
            </div>

            {/* Stats Section */}
            <WhyChooseUs/>

            {/* Tech Grid Features */}
            <Services />

            {/* Contact Section */}
            <Contact />
          </>
        } />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
