
function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed inset-0 tech-grid pointer-events-none"></div>
      <div className="fixed inset-0 glow-spotlight pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full floating-shape pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 rounded-full floating-shape pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <main className="flex-grow relative z-10 px-6 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight mb-4">
              Get in <span className="text-transparen bg-clip-text bg-gradient-to-r from-primary to-blue-400">Touch.</span>
            </h1>
            <p className="text-[#92a4c9] text-lg max-w-2xl leading-relaxed">
              Have questions about our services? Our team of experts is ready to help you scale your digital economy operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Left Column - Contact Info */}
            <div className="flex flex-col gap-12">
              <div className="space-y-10">
                {/* Location */}
                <div className="flex gap-6">
                  <div className="size-12 rounded-xl bg-[#458BCA]/30 border-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Address</h3>
                    <p className="text-[#92a4c9] leading-relaxed">
                      116,Mont des Arts<br />
                      Gombe, Kinshasa<br />
                      République Démocratique du Congo
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6">
                  <div className="size-12 rounded-xl bg-[#458BCA]/30 border-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">alternate_email</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <p className="text-[#92a4c9] mb-1">hello@elikya.tech</p>
                    <p className="text-[#92a4c9] mb-1">(+243) 820 611 793</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6">
                  <div className="size-12 rounded-xl bg-[#458BCA]/30 border-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">phone</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Phone</h3>
                    <p className="text-[#92a4c9] mb-1">(+243) 820 611 793</p>
                  </div>
                </div>
              </div>

            
            </div>

            {/* Right Column - Contact Form */}
            <div className="frosted-glass p-8 lg:p-12 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl pointer-events-none"></div>
              <form action="#" className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#92a4c9]">Full Name</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg text-white input-tech placeholder:text-white/20"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#92a4c9]">Email Address</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg text-white input-tech placeholder:text-white/20"
                      placeholder="john@company.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#92a4c9]">Subject</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg text-white input-tech placeholder:text-white/20"
                    placeholder="How can we help?"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#92a4c9]">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg text-white input-tech placeholder:text-white/20 resize-none"
                    placeholder="Tell us more about your project needs..."
                    rows={6}
                  ></textarea>
                </div>
                <button
                style={{backgroundColor: "#458BCA"}}
                  className="w-full bg-primary hover:bg-primary/90 py-4 rounded-lg font-bold text-lg hover:shadow-[0_0_40px_rgba(19,91,236,0.6)] transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2 group"
                  type="submit"
                >
                  Send Message
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
