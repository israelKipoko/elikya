
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <section className="px-6 lg:px-40 py-24">
        <div className="glass-panel rounded-3xl p-12 lg:p-20 relative overflow-hidden text-center flex flex-col items-center gap-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-teal-500/10 pointer-events-none"></div>
          <h2 className="text-4xl lg:text-5xl font-bold max-w-3xl leading-tight">Ready to Build your Secure Payment Future with Us?</h2>
          <p className="text-xl text-slate-500 max-w-2xl">
            Reliable, scalable, and secure payment solutions designed to help fintechs and banks grow with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" >
              <div className="bg-[#458BCA] text-white px-10  h-12 flex items-center rounded-lg font-bold text-xl hover:shadow-[0_0_40px_rgba(19,91,236,0.6)] transition-all cursor-pointer">
                Start now
              </div> 
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Contact