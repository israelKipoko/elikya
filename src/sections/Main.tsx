import { Link } from 'react-router-dom';

function Main() {
  return (
    <section className="relative pt-20 pb-16 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full w-fit">
              <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Next-Gen Security Enabled</span>
            </div>
            <h1 className="text-5xl text-center lg:text-xl font-black leading-tight tracking-[-0.033em]">
              We build the secure payment infrastructure that <span className="text- bg-clip-text bg-gradient-to-l text-primary to-blue-500">Powers fintech growth.</span>
            </h1>
            <p className="text-[#92a4c9] text-center text-lg lg:text-xl max-w-[650px] leading-relaxed">
             Empowering fintechs, banks, and microfinance institutions with secure, scalable solutions to move money with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center sm:items-stretch w-full">
              <Link to="/services" className="flex">
                <div 
                  style={{backgroundColor: "#458BCA"}} className="hover:bg-primary/90 h-14 px-8 rounded-lg font-bold text-lg hover:shadow-[0_0_40px_rgba(19,91,236,0.6)] transition-all flex items-center gap-2 group shadow-xl shadow-primary/30 w-full sm:w-auto justify-center">
                    <p className='text-white'>Discover our Services</p> 
                    <span className="text-white material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
              </Link>
             
              <Link to="/contact" className="flex">
                <div className="frosted-glass hover:bg-white/10 h-14 px-8 rounded-lg font-bold text-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                <p className='text-white'> Contact us</p>
                </div>
              </Link>
            </div>
          </div>

         
        </div>
      </section>
  )
}

export default Main