
import React from 'react';

const About: React.FC = () => {
  const timelineData = [
    { year: '2022', title: 'Foundation', text: 'Establishment of Niche Healthcare Limited in Lusaka, Zambia, with a vision to transform kidney care.', icon: 'event', color: 'primary' },
    { year: '2024', title: 'Fully Operational', text: 'Niche Renal Services and Niche Wholesale Pharmacy become fully operational from Woodlands, Lusaka.', icon: 'public', color: 'secondary' },
    { year: '2025', title: 'Clinical Training Launch', text: 'Launch of comprehensive resuscitation clinical courses — BLS, IRAD, and Advanced Life Support certifications.', icon: 'trending_up', color: 'primary' },
  ];

  return (
    <div>
      {/* Hero */}
      <header className="hero-gradient pt-48 pb-56 text-center text-white relative">

        <div className="container mx-auto px-6 relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Story & Excellence</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Our Mission & <span className="text-primary">Vision</span></h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            Niche Healthcare Limited (NHL) is a Zambian-registered healthcare company headquartered in Woodlands, Lusaka. Led by two Zambian co-directors, NHL is committed to transforming kidney care through compassion, innovation, and integrity.
          </p>
        </div>
      </header>

      {/* Cards */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .float-card { animation: float 4s ease-in-out infinite; }
        .float-card:nth-child(2) { animation-delay: 0.5s; }
        .float-card:nth-child(3) { animation-delay: 1s; }
      `}</style>
      <section className="pt-28 pb-24 relative z-20">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="float-card glass-card p-10 rounded-[40px] shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">flag</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Niche Healthcare Limited is committed to transforming kidney care in Zambia by delivering exceptional, patient-centred dialysis services and ensuring the reliable supply of medical consumables. Guided by compassion, innovation, and integrity, we aim to set new benchmarks in healthcare excellence.
              </p>
            </div>
            <div className="float-card glass-card p-10 rounded-[40px] shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary text-4xl">visibility</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To become the leading provider of renal care and medical consumables in Zambia and the wider region, delivering scalable, technology-driven solutions that generate sustainable returns while transforming patient outcomes.
              </p>
            </div>
            <div className="float-card glass-card p-10 rounded-[40px] shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">favorite</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Compassion, Integrity, and Quality. We put individuals above profits, maintaining accountability as leaders in global healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-32 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-24">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Milestones</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Our Journey</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
            {timelineData.map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active py-8">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-${item.color} text-slate-900 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
                  <span className={`material-symbols-outlined text-xl ${item.color === 'secondary' ? 'text-white' : ''}`}>{item.icon}</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-[2.5rem] bg-slate-50 dark:bg-card-dark border border-slate-100 dark:border-slate-800 shadow-lg">
                  <div className="flex items-center justify-between space-x-2 mb-2">
                    <div className="font-bold text-xl text-slate-900 dark:text-white">{item.title}</div>
                    <time className={`font-black text-${item.color}`}>{item.year}</time>
                  </div>
                  <div className="text-slate-600 dark:text-slate-400 text-lg">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold">Headquartered in Zambia, Connected Globally</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src="/images/headquarters.png" alt="Lusaka HQ" className="rounded-[3rem] shadow-2xl h-[500px] w-full object-cover" />
              <div className="absolute -top-6 -left-6 bg-primary text-slate-900 p-8 rounded-[2rem] font-bold shadow-xl">Zambia HQ</div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Woodlands, Lusaka — Headquarters</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Headquartered in Woodlands, Lusaka, Niche Healthcare Limited operates Niche Renal Services (NRS) and Niche Wholesale Pharmacy. Our sister company, Niche Healthcare Group PTY Limited, operates from Perth, Western Australia, focusing on healthcare and allied health consumables/products export.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-lg">
                  <span className="material-symbols-outlined text-primary">verified</span> Niche Renal Services — Comprehensive Dialysis & Chronic Care
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <span className="material-symbols-outlined text-primary">verified</span> Niche Wholesale Pharmacy — Licensed Medical Consumables Supply
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <span className="material-symbols-outlined text-primary">verified</span> Professional Clinical Training — BLS, IRAD & ALS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
