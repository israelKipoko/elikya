import { Link } from 'react-router-dom';

function ServicesPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="fixed inset-0 tech-grid pointer-events-none"></div>
      <div className="fixed inset-0 glow-spotlight pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary rounded-full floating-shape pointer-events-none"></div>
      <div className="absolute top-3/4 -right-20 w-96 h-96 bg-blue-500 rounded-full floating-shape pointer-events-none"></div>


      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-primary text-sm">settings_input_component</span>
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Enterprise Ready</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Our <span className="text- bg-clip-text bg-gradient-to-r from-primary to-blue-400">Financial Services</span>
            </h1>
            <p className="text-[#92a4c9] text-xl max-w-3xl leading-relaxed">
              Discover the core areas where Elikya Technology helps fintechs, banks, and microfinance institutions build secure, scalable, and innovative payment solutions.
            </p>
          </div>
        </section>

        {/* Services Sections */}
        <section className="relative px-6 lg:px-20 max-w-7xl mx-auto py-24 space-y-30">
          <div className="flex flex-col items-start max-w-5xl mx-auto">
            <div className="w-full flex flex-col md:flex-row gap-12 items-baseline">
              <div className="md:w-1/3">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">01 / Security Architecture</span>
                <h2 className="text-5xl lg:text-4xl font-black tracking-tight  mt-4">Secure by Design</h2>
              </div>
              <div className="md:w-2/3 space-y-4 eading-relaxed">
                <p className="text-white/90">
                  Security Isn’t a Feature. It’s Our Foundation.
                </p>
                <p>
                  In payments, trust is your most valuable asset. At Elikya Technology, we believe security should never be an afterthought—it must be embedded from day one. Our “Secure by Design” philosophy ensures proactive security and compliance are woven into the DNA of your systems, from the initial blueprint to the final stress test. We build resilient platforms that safeguard your business, your customers, and your reputation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="space-y-4">
                    <div className="flex flex-col items-center gap-1">
                      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">architecture</span>
                      </div>
                      <h4 className="text-white font-bold text-base">Architecture & Design</h4>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-col items-center gap-1">
                      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">security</span>
                      </div>
                      <h4 className="text-white font-bold text-base">Penetration Testing</h4>
                    </div>
                  </div>
                  <div className="space-y-4">
                   <div className="flex flex-col items-center gap-1">
                      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">people</span>
                      </div>
                      <h4 className="text-white font-bold text-base">Unified Approach</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Architecture */}
          <div className="flex flex-col items-start max-w-5xl mx-auto border-t border-white/5 pt-20">
            <div className="w-full flex flex-col md:flex-row gap-12 items-baseline">
              <div className="md:w-1/3">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">02 / System Development</span>
                <h2 className="text-5xl lg:text-4xl font-black tracking-tight mt-4">Custom Payment Systems</h2>
              </div>
              <div className="md:w-2/3 space-y-4">
                  <p className="text-white/90">
                   Build Your Differentiator.
                  </p>
                  <p>
                    We don’t just integrate; we build. From concept to launch, we develop robust, scalable, and feature-rich payment systems tailored to your specific business needs, whether you’re a neobank, a microfinance institution, or an e-commerce platform.
                  </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">build</span>
                      </div>
                      <h4 className="text-white font-bold text-base">End-to-End Development</h4>
                    </div>
                    <p className="text-sm text-[#92a4c9] leading-relaxed">
                      Full-cycle development of white-label payment gateways, card processing platforms, and financial cores including ledgers and reporting systems.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">palette</span>
                      </div>
                      <h4 className="text-white font-bold text-base">UX/UI Design</h4>
                    </div>
                    <p className="text-sm text-[#92a4c9] leading-relaxed">
                      User-centric design for payment applications that enhance conversion rates and ensure smooth, intuitive customer journeys.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          {/* Service 3: Reliability */}
          <div className="flex flex-col items-start max-w-5xl mx-auto border-t border-white/5 pt-20">
            <div className="w-full flex flex-col md:flex-row gap-12 items-baseline">
              <div className="md:w-1/3">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">03 / Global Connectivity</span>
                <h2 className="text-5xl lg:text-4xl font-black tracking-tight mt-4">Seamless Integration Hub</h2>
              </div>
              <div className="md:w-2/3 space-y-4">
                {/* <div className="space-y-6 text-[#92a4c9] text-xl leading-relaxed"> */}
                  <p className="text-white/90">
                   Connect to the Entire Financial Ecosystem
                  </p>
                  <p>
                    Unlock global reach and local relevance. Our expertise lies in seamlessly connecting your platform to the world’s leading financial networks through a single, simplified API.
                  </p>
                {/* </div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">payment</span>
                      </div>
                      <h4 className="text-white font-bold text-base">Visa, Mastercard, Amex</h4>
                    </div>
                    <p className="text-sm text-[#92a4c9] leading-relaxed">
                      Visa, Mastercard, Amex, and other major card networks.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">account_balance</span>
                      </div>
                      <h4 className="text-white font-bold text-base">Banks & Schemes</h4>
                    </div>
                    <p className="text-sm text-[#92a4c9] leading-relaxed">
                      Direct integrations for wire transfers, ACH, SEPA, and local clearing systems.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">phone_iphone</span>
                      </div>
                      <h4 className="text-white font-bold text-base">Mobile Money</h4>
                    </div>
                    <p className="text-sm text-[#92a4c9] leading-relaxed">
                      Connections to major operators (e.g., M-Pesa, Orange Money, Airtel Money) for key regional markets.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">hub</span>
                      </div>
                      <h4 className="text-white font-bold text-base">Payment Aggregators</h4>
                    </div>
                    <p className="text-sm text-[#92a4c9] leading-relaxed">
                      Simplify connectivity with aggregators that offer a single API for hundreds of payment options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: Governance */}
          <div className="flex flex-col items-start max-w-5xl mx-auto border-t border-white/5 pt-20">
            <div className="w-full flex flex-col md:flex-row gap-12 items-baseline">
              <div className="md:w-1/3">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">04 / Infrastructure Management</span>
                <h2 className="text-5xl lg:text-4xl font-black tracking-tight mt-4">Cloud Infrastructure & DevOps</h2>
              </div>
              <div className="md:w-2/3 space-y-4">
                  <p className="text-white/90">
                   Connect to the Entire Financial Ecosystem
                  </p>
                  <p>
                    Unlock global reach and local relevance. Our expertise lies in seamlessly connecting your platform to the world’s leading financial networks through a single, simplified API.
                  </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">cloud_upload</span>
                      </div>
                      <h4 className="text-white font-bold text-base">Cloud Setup & Migration</h4>
                    </div>
                    <p className="text-sm text-[#92a4c9] leading-relaxed">
                      Secure architecture and deployment on AWS, Azure, or GCP, optimized for financial workloads.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">backup</span>
                      </div>
                      <h4 className="text-white font-bold text-base">High Availability & DR</h4>
                    </div>
                    <p className="text-sm text-[#92a4c9] leading-relaxed">
                      Design for zero single points of failure and seamless failover.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-1">
                      <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">monitoring</span>
                      </div>
                      <h4 className="text-white font-bold text-base">Monitoring & Maintenance</h4>
                    </div>
                    <p className="text-sm text-[#92a4c9] leading-relaxed">
                      24/7 monitoring, alerting, and ongoing maintenance of your payment infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* CTA Section */}
        <section className="px-6 lg:px-20 max-w-7xl mx-auto py-24">
          <div className="frosted-glass rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                Ready to upgrade your <br />
                <span className="text-primary">financial infrastructure?</span>
              </h2>
              <p className="text-[#92a4c9] text-xl max-w-5xl">With Elikya Technology, you gain access to secure, scalable, and compliant payment solutions designed to support the growth of fintechs, digital banks, and microfinance institutions. Together, we can build a future where your payments are secure by design, giving your customers the confidence to trust and transact with you.</p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <Link
                 to="/contact">
                  <div className="bg-[#458BCA] hover:bg-primary/90 h-12 px-10 rounded-lg font-bold text-lg hover:shadow-[0_0_40px_rgba(19,91,236,0.6)] transition-all flex items-center gap-3 shadow-2xl shadow-primary/30">
                     <p className='text-white '>Contact us</p>
                     <span className="text-white material-symbols-outlined">mail</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ServicesPage;
