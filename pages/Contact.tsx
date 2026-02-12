
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 bg-white dark:bg-slate-950">
      <header className="py-32 text-center hero-pattern overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-secondary dark:text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Contact <span className="text-primary italic">Niche</span> Group
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Reach out to our teams in Lusaka or Perth for dialysis services, medical supplies, clinical training, or corporate inquiries.
          </p>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"></div>
      </header>

      <section className="py-24 container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Australia */}
          <div className="bg-slate-50 dark:bg-card-dark rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl">
            <div className="h-64 relative flex items-center justify-center">
              <img
                src="/images/wholesale_pharmacy_1770889446699.png"
                alt="Australia Location"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 text-center">
                <span className="material-symbols-outlined text-6xl text-primary mb-3">location_on</span>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Perth, Australia</h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">Sister Company — Healthcare Exports</p>
              </div>
            </div>
            <div className="p-10 space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">map</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Address</h4>
                  <p className="text-slate-600 dark:text-slate-400">14 Vision Way, Southern River, WA 6110, Australia</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400">+61 426 170 805</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Email</h4>
                  <a href="mailto:info@nichehealthcaregroup.com" className="text-primary hover:underline">info@nichehealthcaregroup.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Zambia */}
          <div className="bg-slate-50 dark:bg-card-dark rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl">
            <div className="h-64 relative flex items-center justify-center">
              <img
                src="/images/headquarters.png"
                alt="Zambia Location"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="relative z-10 text-center">
                <span className="material-symbols-outlined text-6xl text-primary mb-3">public</span>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Lusaka, Zambia</h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium">Headquarters — Renal Services, Pharmacy & Training</p>
              </div>
            </div>
            <div className="p-10 space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">map</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Address</h4>
                  <p className="text-slate-600 dark:text-slate-400">Plot 4532, Cairo Road, Lusaka, Zambia</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400">+260 779 156334</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Email</h4>
                  <a href="mailto:info@nichehealthcaregroup.com" className="text-primary hover:underline">info@nichehealthcaregroup.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-20 rounded-[4rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Send us a Message</h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 font-light">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-lg" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-lg" placeholder="john@example.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Subject</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-lg">
                    <option>General Inquiry</option>
                    <option>Dialysis / Renal Services</option>
                    <option>Wholesale Pharmacy</option>
                    <option>Clinical Training (BLS/IRAD/ALS)</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Preferred Location</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-lg">
                    <option>Perth, Australia</option>
                    <option>Lusaka, Zambia</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Message</label>
                  <textarea rows={5} className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all text-lg" placeholder="How can we help you today?"></textarea>
                </div>
                <div className="md:col-span-2 pt-6">
                  <button className="w-full bg-primary text-slate-900 font-black py-5 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all text-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined">send</span> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-24 text-center">
          <div className="bg-white/10 p-12 lg:p-20 rounded-[4rem] backdrop-blur-xl border border-white/20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to consult with experts?</h2>
              <p className="text-white/70 text-xl font-light">Our medical teams are available for strategy sessions across timezones.</p>
            </div>
            <button className="bg-primary text-slate-900 px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all whitespace-nowrap">
              Schedule Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
