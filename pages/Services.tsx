
import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

const Services: React.FC = () => {
  return (
    <div className="pt-32">
      <header className="py-24 text-center">
        <div className="container mx-auto px-6">
          <Reveal width="100%">
            <span className="text-secondary dark:text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Specializations</span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Products & Services</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Niche Healthcare Limited operates through specialised divisions — Niche Renal Services, Niche Wholesale Pharmacy, and our Clinical Training Centre — to deliver comprehensive healthcare solutions.
            </p>
          </Reveal>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-24 pb-32">

        {/* ==================== SERVICE 1: NICHE RENAL SERVICES ==================== */}
        <section className="mb-40 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <Reveal direction="right">
              <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-5xl">water_drop</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">Niche Renal Services (NRS)</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                The name "Niche" embodies the company's dedication to serving a specialised segment of the healthcare sector — patients living with chronic kidney disease (CKD). NHL delivers tailored, high-quality renal care solutions while operating at the intersection of advanced medical service delivery and healthcare supply.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                Our core focus includes comprehensive dialysis treatments, hypertension management, and other chronic medical conditions management. Distinguishing features include a patient-centred philosophy, rigorous quality assurance systems, and the integration of telehealth and digital health innovations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-secondary text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2">
                  Book Appointment <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="lg:w-1/2 relative group">
            <Reveal direction="left">
              <div className="aspect-video lg:aspect-[4/3] w-full rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                <img src="/images/renal_services.png" alt="Niche Renal Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            </Reveal>
          </div>
        </section>

        {/* ==================== SERVICE 2: NICHE WHOLESALE PHARMACY ==================== */}
        <section className="mb-40 flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2">
            <Reveal direction="left">
              <div className="w-20 h-20 bg-secondary/20 rounded-3xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary text-5xl">inventory_2</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">Niche Wholesale Pharmacy</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Niche Wholesale Pharmacy is a licensed wholesale pharmacy based in Lusaka, Zambia, specialising in the supply of renal and dialysis consumables, allied health products, and categorised groups of prescription medicines. We support hospitals, dialysis centres, and renal clinics with reliable, quality-assured products essential for uninterrupted renal replacement therapy.
              </p>

              {/* Why Choose Us */}
              <h3 className="text-2xl font-bold mb-5 text-slate-900 dark:text-white">Why Choose Us</h3>
              <ul className="space-y-3 mb-10">
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                  Licensed and regulated wholesale pharmacy
                </li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                  Extensive client needs assessments with an evidence-based approach
                </li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                  Deep understanding of the Southern African landscape and culture
                </li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                  Quality-assured renal, dialysis consumables, allied health products and medicines
                </li>
                <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-primary mt-0.5">verified</span>
                  Competitive pricing with reliable and timely supply
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-secondary text-white px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all flex items-center gap-2">
                  Request Supply <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="lg:w-1/2 relative group">
            <Reveal direction="right">
              <div className="aspect-video lg:aspect-[4/3] w-full rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                <img src="/images/wholesale_pharmacy_1770889446699.png" alt="Niche Wholesale Pharmacy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>

              {/* Who We Serve + Product Range - floating card */}
              <div className="absolute -bottom-16 -left-8 bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-2xl max-w-sm hidden xl:block border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Who We Serve</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-5">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>Public and private hospitals</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span>All dialysis centres and specialist renal clinics</li>
                </ul>
                <h4 className="font-bold text-lg mb-3 text-slate-900 dark:text-white">Product Range</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Dialysis & renal consumables</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Dialysis access devices (permanent & temporal catheters)</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>Allied health products & nutritional supplies</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>All medicines</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Mobile-only Who We Serve / Product Range */}
        <div className="xl:hidden mb-24 -mt-16">
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Who We Serve</h4>
                <ul className="text-slate-600 dark:text-slate-400 space-y-3">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">local_hospital</span>Public and private hospitals</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">medical_services</span>All dialysis centres and specialist renal clinics</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700">
                <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Product Range</h4>
                <ul className="text-slate-600 dark:text-slate-400 space-y-3">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary"></span>Dialysis & renal consumables</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary"></span>Dialysis access devices</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary"></span>Allied health products</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-secondary"></span>All medicines</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ==================== SERVICE 3: CLINICAL TRAINING ==================== */}
        <section className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white overflow-hidden relative mb-40">
          <Reveal width="100%">
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                    <span className="material-symbols-outlined text-primary text-4xl">school</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Clinical Training Centre</h2>
                  <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                    Comprehensive resuscitation clinical courses empowering the next generation of healthcare providers through certified, intensive training modules.
                  </p>
                  <div className="flex items-center gap-4 text-primary text-sm font-bold mb-6">
                    <span className="material-symbols-outlined">mail</span>
                    <a href="mailto:info@nichehealthcaregroup.com" className="hover:underline">info@nichehealthcaregroup.com</a>
                  </div>
                  <Link to="/contact" className="inline-block bg-primary text-slate-900 px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                    Enquire About Training
                  </Link>
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl relative group h-[500px]">
                    <img src="/images/clinical_training_1770889813333.png" alt="Clinical Training" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-12">
                      <div>
                        <span className="bg-primary/90 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full mb-4 inline-block">ACCREDITED</span>
                        <h4 className="text-3xl font-bold">Clinical Excellence Hub</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Individual Course Details */}
              <div className="space-y-12">
                {/* BLS */}
                <div className="bg-white/5 rounded-[2.5rem] p-10 lg:p-14 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                    <h3 className="text-2xl lg:text-3xl font-bold">Basic Life Support (BLS)</h3>
                    <span className="bg-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-full ml-auto hidden sm:block">2-HOUR COURSE</span>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    The BLS training will provide you with skills and knowledge required to respond to life-threatening emergencies in a variety of setups. This two-hour beginner's course will outline the chain of survival, DRSABCD action plan and will equip you with necessary skills on how to use an automated external defibrillator. This multidisciplinary course is specifically tailored to meet the needs of all healthcare professionals. At the end of the training, you will be competent in cardiopulmonary resuscitation.
                  </p>
                  <p className="text-slate-400 text-sm italic">Recommended for everyone working in a clinical setup who comes in contact with patients.</p>
                </div>

                {/* IRAD */}
                <div className="bg-white/5 rounded-[2.5rem] p-10 lg:p-14 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                    <h3 className="text-2xl lg:text-3xl font-bold">Identification, Prevention and Responding to Acute Deterioration (IRAD)</h3>
                    <span className="bg-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-full ml-auto hidden sm:block">2-DAY COURSE</span>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    This two-day course provides training in identification of acute clinical deterioration, care of the deteriorated patient and management. The course outcomes for candidates is to be able to describe a systematic approach to assessing acutely ill patients. The IRAD course is a blend of lectures, drills, problem-based learning and simulated learning that embed the ABCDE approach to assessment and management of the patient with deteriorating illness.
                  </p>
                  <p className="text-slate-400 text-sm italic">Aimed at doctors, nurses, clinical officers and allied healthcare professionals. Promotes teamwork and multi-professional approach to patient care.</p>
                </div>

                {/* ALS */}
                <div className="bg-white/5 rounded-[2.5rem] p-10 lg:p-14 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                    <h3 className="text-2xl lg:text-3xl font-bold">Advanced Life Support (ALS)</h3>
                    <span className="bg-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-full ml-auto hidden sm:block">3-DAY COURSE</span>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    This course will provide you with advanced skills and knowledge required to manage the deteriorating patient, cardiac arrests and other medical emergencies. The training covers resuscitation skills and development of emergency team leadership abilities. Content includes assessment of the compromised patient using ABCDE, review of BLS, advanced airway management, recognising and managing life-threatening arrhythmias, defibrillation, transcutaneous pacing, advanced cardiac arrest algorithms, and emergency drugs.
                  </p>
                  <p className="text-slate-400 text-sm italic">Designed for experienced clinicians — doctors, clinical officers, nurses, paramedics, and physiotherapists. We recommend completing BLS and IRAD before attempting ALS.</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-slate-400 text-lg mb-6 px-4">Call or email our team to discuss the cost and booking arrangements</p>
                <a href="mailto:info@nichehealthcaregroup.com" className="inline-flex w-full sm:w-auto justify-center items-center gap-2 sm:gap-3 bg-primary text-slate-900 px-6 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:shadow-2xl transition-all break-all sm:break-normal">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">mail</span> info@nichehealthcaregroup.com
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
          </Reveal>
        </section>

        {/* ==================== CASE STUDIES ==================== */}
        <section className="mb-20">
          <Reveal width="100%">
            <div className="text-center mb-20">
              <span className="text-secondary dark:text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Real Impact</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">Case Studies</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Case Study 1 */}
              <div className="bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all">
                <div className="bg-gradient-to-br from-secondary to-secondary/80 p-10">
                  <span className="bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 inline-block backdrop-blur-sm">CASE STUDY 1</span>
                  <h3 className="text-2xl font-bold text-white mb-2">Observership & Partnership</h3>
                  <p className="text-white/70">Livingstone General Hospital Attachment</p>
                </div>
                <div className="p-10">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    Doctors and nurses from Livingstone General Hospital participated in a one-week attachment at Niche Renal Service to observe and learn from our multidisciplinary team.
                  </p>
                  <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Focus Areas Covered</h4>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary mt-0.5 text-lg">check_circle</span>
                      Infection prevention in dialysis patients
                    </li>
                    <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary mt-0.5 text-lg">check_circle</span>
                      Critical thinking skills for junior staff
                    </li>
                    <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary mt-0.5 text-lg">check_circle</span>
                      Identification and prevention of clinical deterioration in dialysis patients
                    </li>
                  </ul>
                  <div className="bg-primary/10 rounded-2xl p-6">
                    <h5 className="font-bold text-sm uppercase tracking-widest text-primary mb-2">Impact</h5>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      This observership strengthened collaboration between institutions, enhanced staff competence, and reinforced a culture of safety and proactive patient care.
                    </p>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all">
                <div className="bg-gradient-to-br from-primary to-primary/80 p-10">
                  <span className="bg-white/20 text-slate-900 text-xs font-bold px-4 py-1.5 rounded-full mb-4 inline-block backdrop-blur-sm">CASE STUDY 2</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Referral for Maintenance Dialysis</h3>
                  <p className="text-slate-900/70">Comorbid Patient — Mr. JF</p>
                </div>
                <div className="p-10">
                  <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Patient Profile</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    Mr. JF, a comorbid patient newly commenced on dialysis, referred from a tertiary hospital.
                  </p>
                  <h4 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Intervention</h4>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary mt-0.5 text-lg">check_circle</span>
                      Comprehensive health assessment conducted by Niche Renal Service doctors
                    </li>
                    <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary mt-0.5 text-lg">check_circle</span>
                      Identification and active management of ongoing medical issues
                    </li>
                    <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary mt-0.5 text-lg">check_circle</span>
                      Tailored dialysis care integrated with broader medical management
                    </li>
                  </ul>
                  <div className="bg-primary/10 rounded-2xl p-6">
                    <h5 className="font-bold text-sm uppercase tracking-widest text-primary mb-2">Outcome</h5>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Marked improvement in quality of life, demonstrating the value of holistic patient assessment and multidisciplinary care in dialysis management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

      </main>
    </div>
  );
};

export default Services;
