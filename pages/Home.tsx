
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 z-0">
          <img
            alt="Healthcare Professional"
            className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1]"
            src="/images/hero_background.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 text-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              Global Standards, Local Impact
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-10 leading-[1] tracking-tighter">
              Bridging <span className="text-primary italic font-serif">International</span> <br />Healthcare Needs
            </h1>
            <p className="text-lg md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-2xl font-light">
              Niche Healthcare Limited delivers exceptional, patient-centred dialysis services, reliable medical consumables supply, and professional clinical training from Lusaka, Zambia.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link to="/services" className="bg-primary text-slate-900 px-12 py-5 rounded-full font-black text-lg hover:shadow-2xl hover:-translate-y-1 transition-all w-full sm:w-auto text-center">
                Explore Our Capabilities
              </Link>
              <Link to="/services" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto text-center">
                Clinical Training
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Capabilities Section */}
      <section className="py-32 md:py-48 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight">Our Capabilities</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                A comprehensive suite of healthcare solutions tailored to improve patient outcomes and operational excellence in diverse environments.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-2">
              <div className="w-16 h-1 bg-primary rounded-full"></div>
              <span className="text-sm font-bold tracking-widest uppercase text-slate-400">Excellence in Action</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="md:col-span-8 group relative rounded-[3.5rem] overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <img
                    src="/images/renal_services.png"
                    alt="Niche Renal Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent lg:hidden"></div>
                </div>
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <span className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-6 block">Niche Renal Services</span>
                  <h3 className="text-3xl font-bold mb-8 leading-tight text-slate-900 dark:text-white">Comprehensive Dialysis & Renal Care</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-10">
                    NHL delivers tailored, high-quality renal care solutions for patients living with chronic kidney disease (CKD), including comprehensive dialysis treatments, hypertension management, and chronic medical conditions management.
                  </p>
                  <div className="flex items-center gap-10">
                    <div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-white">500+</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Certified Graduates</div>
                    </div>
                    <div className="w-px h-12 bg-slate-200 dark:bg-slate-800"></div>
                    <div>
                      <div className="text-3xl font-bold text-slate-900 dark:text-white">12</div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Training Tracks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 space-y-8 h-full flex flex-col">
              <div className="flex-1 group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800">
                <div className="h-56 overflow-hidden">
                  <img src="/images/wholesale_pharmacy_1770889446699.png" alt="Wholesale Pharmacy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Wholesale Pharmacy</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">Licensed wholesale pharmacy specialising in renal, dialysis consumables, allied health products and prescription medicines.</p>
                </div>
              </div>
              <div className="flex-1 group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800">
                <div className="h-56 overflow-hidden">
                  <img src="/images/clinical_training_1770889813333.png" alt="Clinical Training" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <h4 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Clinical Training</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">Comprehensive resuscitation clinical courses including BLS, IRAD, and Advanced Life Support certifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-40 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative">
                <img src="/images/headquarters.png" alt="NHL Headquarters" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-2xl max-w-xs hidden xl:block border border-slate-100 dark:border-slate-700">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">format_quote</span>
                <p className="italic text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  "Committed to transforming kidney care in Zambia by delivering exceptional, patient-centred dialysis services."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-1 bg-primary rounded-full"></div>
                  <p className="font-bold text-slate-900 dark:text-white tracking-widest uppercase text-xs">Board of Directors</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-secondary dark:text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Driven by Integrity</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 text-slate-900 dark:text-white tracking-tight leading-tight">Guided by Compassion, Defined by Excellence</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light">
                NHL is more than just a provider; we are partners in health. Headquartered in Woodlands, Lusaka, with a sister company in Perth, Western Australia, we deliver unparalleled renal care and medical standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">Accredited</h5>
                    <p className="text-sm text-slate-500">Licensed by international regulatory boards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-3xl">language</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1 text-slate-900 dark:text-white">Global Reach</h5>
                    <p className="text-sm text-slate-500">Bridging Perth and Sub-Saharan Africa.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="inline-block px-12 py-5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-black rounded-full hover:shadow-2xl transition-all text-lg tracking-tight">
                Learn More About Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Ready for Exceptional Renal Care?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-12 text-lg font-light">
            Whether you need dialysis services, certified clinical training, or reliable medical consumables, our team of experts is ready to assist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-primary text-slate-900 px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl shadow-primary/20">
              Send Inquiry
            </Link>
            <a href="tel:+61426170805" className="border border-white/20 backdrop-blur-md px-12 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <span className="material-symbols-outlined">call</span> Talk to an Advisor
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-white/5 -skew-x-12 -translate-x-1/2"></div>
      </section>
    </div>
  );
};

export default Home;
