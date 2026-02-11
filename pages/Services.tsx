
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: "Medical Supplies Export",
      desc: "We are a specialist exporter of high-quality medical consumables and infrastructure. Our supply chain ensures that certified equipment reaches healthcare facilities across Southern and Central Africa promptly and safely.",
      icon: "inventory_2",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqXi4CApdbLOcoA_2T8tfHF-ISTRE9Id9c5EC0oXtv6MAXT_HBQgBFccYMmYAGTPC47XpmxuuaTHOhg7un1dSkri-mGLyxf-OY_qlaBg85_SSznrSnCKuFpor60Nswa-QHhWTjs8W315faetX0O61lMxHZE7OKrgUdZ5vMclq2uRINMQXt9AODl-vR5qgKXbEq0aKFvbE_Cjz5SI7-2MNMDHgfwoyWn5afphDDi1Cb4cPU49DeNMa1wz2D6d_Z6XYY7eeeAwwPltjr",
      accent: "primary"
    },
    {
      title: "Dialysis Services",
      desc: "Niche Healthcare Group provides expert guidance for healthcare institutions including development, clinical implementation, and operational management of dialysis centers. We focus on life-saving treatment with the latest technology.",
      icon: "water_drop",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaOSrdzj46gpmRj3EQQxCDzfo9PSF-BKmSlfb8YOkvrwlfDh4sAm0aiwMV9JLbMGS8nm6orex03b6tDn0ky0gt9jSIlthz-_M-92lifdmICJMQiYM79HXA-dRCYCXR6i7IRNrkq935xSMYEcUeANVjtW9Kv4x32890zF4yCMqv5rvEnEPuRnZM71YGb0k4uT6jpiSz39XiBkiTGOp0958lz5W98RrwUB8Lf6TQGUO3_8JKYCRJ_ktB3_bBp-UfRk_7bbVJKOUV__aB",
      accent: "secondary"
    },
    {
      title: "Healthcare Consultancy",
      desc: "We offer specialized consulting services for public and private healthcare entities. Our expertise ranges from feasibility studies and facility planning to accreditation support and operational audits.",
      icon: "partner_exchange",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA64SyfrtjGPRWG3BfmZTiHMPOnlSopsTee4rDbs4EaknzGorBbcY-2lhuzONCzUKp_7auHzSBQPC8euhb11FT_yKb51qlRsCDysqLq_EgC5ZhABwPMdNeuOB7XitEoJr1kXFsDz2lexm0D1QZvAgxv7KxMx1yRYRjqp-M7BEM027ifGqH6xDALJL05qnFuZ3hx0jN8DC5lSROzG7iPOYuhht2TkVdIXu2f-K4LTAMydn_TGxNOw7S7VNthhIO9GNwvpD8-pCXTyxK5",
      accent: "primary"
    }
  ];

  return (
    <div className="pt-32">
      <header className="py-24 text-center">
        <div className="container mx-auto px-6">
          <span className="text-secondary dark:text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Specializations</span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Healthcare Services</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive medical solutions tailored to bridging international healthcare standards with local needs across Africa.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-24 pb-32">
        {services.map((service, idx) => (
          <section key={idx} className={`mb-40 flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
              <div className={`w-20 h-20 bg-${service.accent}/20 rounded-3xl flex items-center justify-center mb-8`}>
                <span className={`material-symbols-outlined text-${service.accent} text-5xl`}>{service.icon}</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">{service.title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className={`bg-secondary text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2`}>
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
                <button className="border border-slate-200 dark:border-slate-700 px-10 py-4 rounded-full font-bold hover:bg-white dark:hover:bg-slate-800 transition-all text-slate-700 dark:text-slate-300">
                  Case Studies
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="aspect-video lg:aspect-[4/3] w-full rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent`}></div>
              </div>
              <div className={`absolute -bottom-8 -${idx % 2 === 0 ? 'right' : 'left'}-8 w-48 h-48 bg-${service.accent}/10 rounded-full blur-3xl pointer-events-none`}></div>
            </div>
          </section>
        ))}

        {/* Training Feature */}
        <section className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white overflow-hidden relative">
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">school</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Professional Training Center</h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                Empowering the next generation of healthcare providers through certified, intensive training modules in BLS, IRAD, and ALS.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-4 text-lg">
                  <span className="material-symbols-outlined text-primary">verified</span> Basic Life Support (BLS)
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <span className="material-symbols-outlined text-primary">verified</span> IRAD Advanced Certification
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <span className="material-symbols-outlined text-primary">verified</span> Advanced Life Support (ALS)
                </li>
              </ul>
              <Link to="/contact" className="inline-block bg-primary text-slate-900 px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                Enroll Today
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative group h-[500px]">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaLIQ8MOx04VvAS5AWt_kgeXix6GqGzmystZ-e1JERifY6PTNWF8V21eWGrwkpFWAXiYdzWlAnX0tIPIc75gICHJn_kgUSSDrG2okUfE1lMMmE4sHVHaIAy1gl08_rYdato5Uh7X8BdqlkFeGEqkpSE_93Y-2ewIpb9Jb19lvRyxBe5jFftZRo4zh2Lji39rhlR2fIT6C5C4ArZOiiSraLaderijmfANx-zTOvrarqWy-i5176ij_tIfOaLn7Gjrmykuwtr7mTaSCy" alt="Training" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-12">
                  <div>
                    <span className="bg-primary/90 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full mb-4 inline-block">ACCREDITED</span>
                    <h4 className="text-3xl font-bold">Clinical Excellence Hub</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
        </section>
      </main>
    </div>
  );
};

export default Services;
