import { Link } from 'react-router-dom';
import logo from '../assets/logo_elikya.png';

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/10 px-6 lg:px-20 py-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        <div className="md:col-span-8 space-y-8">
           <Link to="/" className="flex items-center cursor-pointer">
            <span className="text-xl font-extrabold tracking-tight w-[100px]">
              <img src={logo} alt="main logo" className='w-full h-full object-contain' />
            </span>
          </Link>
          <div className="max-w-xl">
            <h4 className="text-white font-bold mb-1">About</h4>
            <p className="text-[#92a4c9] text-base leading-relaxed">
             A fintech-focused startup specializing in the development and integration of end-to-end payment systems for fintech, digital banking, and microfinance.
            </p>
          </div>
        </div>
        <div className="md:col-span-4 flex flex-col gap-6">
          <h4 className="text-white font-bold">Contact</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl">location_on</span>
              <p className="text-[#92a4c9] leading-relaxed">
                   Kinshasa & Lubumbashi, DR. Congo, Africa 
                </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl">mail</span>
              <a className="text-[#92a4c9] hover:text-white text-sm transition-colors" href="mailto:hello@elikya.tech">
                <p className="text-[#92a4c9]">hello@elikya.tech</p>
              </a>
            </div>
            <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-primary">phone</span>
              <a className="text-[#92a4c9] hover:text-white text-sm transition-colors" href="mailto:dev@fintechgrid.io">
                <p className="text-[#92a4c9] mb-1">(+243) --- --- ---</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-12 mt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-[#92a4c9]">Copyright ©2026 Kawino's Technologies all rights reserved.</p>
        {/* <div className="flex gap-8 text-xs">
          <a className="text-[#92a4c9] hover:text-white transition-colors" href="#">
             <p className='text-[#92a4c9] '>Privacy Policy</p> 
          </a>
          <a className="text-[#92a4c9] hover:text-white transition-colors" href="#">
              <p className='text-[#92a4c9] '>Terms</p> 
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
