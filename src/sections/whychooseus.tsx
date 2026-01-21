function WhyChooseUs() {
  const reasons = [
    { title: "Unmatched", subtitle: "Security" },
    { title: "Lightning", subtitle: "Fast" },
    { title: "Zero", subtitle: "Tech Debt" },
    { title: "Global", subtitle: "Reach" }
  ];

  return (
    <section className="px-6 lg:px-40 py-24 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, index) => (
          <div 
            key={index}
            className={`glass-panel mesh-gradient-${index + 1} rounded-xl px-6 py-4 flex items-center group hover:border-primary/50 transition-all duration-300 border border-primary/20`}
          >
            <div className="flex-shrink-0 mr-4">
              <div className="w-10 h-10 rounded-full bg-[#458BCA]/30 flex items-center justify-center text-primary border-primary/20">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight tracking-tight">
                {reason.title} {reason.subtitle}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
