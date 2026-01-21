import logo from '../assets/logo_elikya.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-2 mx-3 z-50 frosted-glass rounded-[8px] border-b border-white/10 px-6 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <span className="text-xl font-extrabold tracking-tight w-[100px]">
              <img src={logo} alt="main logo" className='w-full h-full object-contain' />
            </span>
          </Link>
          <nav className="flex items-center gap-8">
            <Link to="/">
              <p className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-[#458BCA]' : 'text-white hover:text-[#458BCA]'}`}>Home</p>
            </Link>
            <Link to="/services">
              <p className={`text-sm font-medium transition-colors ${location.pathname === '/services' ? 'text-[#458BCA]' : 'text-white hover:text-[#458BCA]'}`}>Services</p>
            </Link>
            <Link to="/contact">
              <p className={`text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-[#458BCA]' : 'text-white hover:text-[#458BCA]'}`}>Contact</p>
            </Link>
          </nav>
        </div>
      </header>
  )
}

export default Header