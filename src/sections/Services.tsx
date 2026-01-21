
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="frosted-glass p-6 rounded-xl group hover:border-primary/50 transition-all">
    <div className="size-12 bg-[#458BCA]/30 border-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined text-primary">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-[#92a4c9] leading-relaxed">{description}</p>
  </div>
);

const services: ServiceCardProps[] = [
  {
    icon: "shield_locked",
    title: "Secure by Design",
    description: "A robust, PCI DSS-compliant architecture built for trust. Includes advanced encryption, continuous vulnerability testing, and compliance baked in from day one."
  },
  {
    icon: "credit_card",
    title: "Custom Payment Systems",
    description: "From idea to deployment, tailored for neobanks and digital wallets. We deliver white-label gateways, mobile-first apps, and payment experiences designed to scale."
  },
  {
    icon: "hub",
    title: "Seamless Integration Hub",
    description: "Simplified connections to global and local financial providers. Our single API integrates card networks, mobile money, and banking rails, reducing time-to-market."
  },
  {
    icon: "cloud_upload",
    title: "Cloud Infrastructure & DevOps",
    description: "High-performance, reliable, and compliant hosting. With automated scaling, disaster recovery, and 24/7 monitoring, we ensure uptime and resilience."
  }
];

import { Link } from 'react-router-dom';

function Services() {
  return (
    <section className="px-6 lg:px-16 max-w-10xl mx-auto py-24">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl lg:text-5xl font-black text-white">Precise Engineering Services</h1>
        <p className="text-[#92a4c9] text-lg max-w-[650px] mx-auto">Discover the core areas where Elikya Technology helps fintechs, banks, and microfinance institutions build secure, scalable, and innovative payment solutions.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link
          to="/services"
        >
          <div
          className="bg-[#458BCA] hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold hover:shadow-[0_0_40px_rgba(19,91,236,0.6)] transition-all shadow-lg shadow-primary/20"
          >
           <p>Explore All Services</p> 
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Services