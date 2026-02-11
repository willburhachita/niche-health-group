
import React from 'react';

const About: React.FC = () => {
  const timelineData = [
    { year: '2018', title: 'Foundation', text: 'Establishment of Niche Healthcare with a vision to bridge international standards.', icon: 'event', color: 'primary' },
    { year: '2020', title: 'African Expansion', text: 'Opening of our Lusaka headquarters, providing dialysis and professional training programs.', icon: 'public', color: 'secondary' },
    { year: '2023', title: 'Clinical Excellence', text: 'Launch of advanced medical supply export division and IRAD training certifications.', icon: 'trending_up', color: 'primary' },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <header className="hero-gradient py-48 text-center text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Story & Excellence</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Our Mission & <span className="text-primary">Vision</span></h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto">
            Committed to transforming healthcare services by ensuring excellence and meeting international standards in every interaction.
          </p>
        </div>
      </header>

      {/* Cards */}
      <section className="py-24 -mt-24 relative z-20">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-10 rounded-[40px] shadow-xl hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">flag</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To radically change healthcare services by ensuring excellence, building lasting relationships, and meeting international standards.
              </p>
            </div>
            <div className="glass-card p-10 rounded-[40px] shadow-xl hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary text-4xl">visibility</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To become the recognized leader in innovative health technology and clinical skills, fostering healthier communities globally.
              </p>
            </div>
            <div className="glass-card p-10 rounded-[40px] shadow-xl hover:-translate-y-2 transition-transform">
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
            <h2 className="text-4xl md:text-5xl font-bold">Serving Two Continents</h2>
            <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaLIQ8MOx04VvAS5AWt_kgeXix6GqGzmystZ-e1JERifY6PTNWF8V21eWGrwkpFWAXiYdzWlAnX0tIPIc75gICHJn_kgUSSDrG2okUfE1lMMmE4sHVHaIAy1gl08_rYdato5Uh7X8BdqlkFeGEqkpSE_93Y-2ewIpb9Jb19lvRyxBe5jFftZRo4zh2Lji39rhlR2fIT6C5C4ArZOiiSraLaderijmfANx-zTOvrarqWy-i5176ij_tIfOaLn7Gjrmykuwtr7mTaSCy" alt="Australia HQ" className="rounded-[3rem] shadow-2xl h-[500px] w-full object-cover" />
              <div className="absolute -top-6 -left-6 bg-primary text-slate-900 p-8 rounded-[2rem] font-bold shadow-xl">Australia HQ</div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Western Australia Hub</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Based in Southern River, Perth, our Australian operations focus on international consultancy, medical supply chain excellence, and high-tier professional training for healthcare workers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-lg">
                  <span className="material-symbols-outlined text-primary">verified</span> Certified Medical Supplies Export
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <span className="material-symbols-outlined text-primary">verified</span> Global Healthcare Consultancy
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
