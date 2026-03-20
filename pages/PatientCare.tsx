import React from 'react';
import { Reveal } from '../components/Reveal';

const PatientCare: React.FC = () => {
  return (
    <div className="pt-32">
      <header className="py-24 text-center">
        <div className="container mx-auto px-6">
          <Reveal width="100%">
            <span className="text-secondary dark:text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Niche Renal Services</span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Patient Self-Care Guide</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Managing chronic kidney disease (CKD) and adjusting to dialysis is a journey. With the right care and habits, you can maintain a high quality of life. Explore our guide on how to take care of yourself.
            </p>
          </Reveal>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-24 pb-32">
        
        {/* Step 1: Diet Section */}
        <section className="mb-32 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <Reveal direction="right">
              <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">restaurant_menu</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">Nutrition & Diet</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                A kidney-friendly diet helps protect your kidneys from further damage and limits the buildup of minerals in your blood.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-primary text-sm">check</span></div>
                  Limit sodium (salt) to help control your blood pressure.
                </li>
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-primary text-sm">check</span></div>
                  Monitor potassium and phosphorus, avoiding processed foods.
                </li>
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-primary text-sm">check</span></div>
                  Eat the right amount and types of protein as advised by your nutritionist.
                </li>
              </ul>
            </Reveal>
          </div>
          <div className="lg:w-1/2 relative group">
            <Reveal direction="left">
              <div className="aspect-video lg:aspect-square w-full rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                <img src="/images/care_step1_diet.png" alt="Nutrition and Diet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Step 2: Fluid Management */}
        <section className="mb-32 flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2">
            <Reveal direction="left">
              <div className="w-20 h-20 bg-secondary/20 rounded-3xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary text-4xl">water_drop</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">Fluid Management</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                For dialysis patients, managing fluid intake is crucial between treatments to prevent swelling and heart strain.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-secondary text-sm">check</span></div>
                  Track your daily fluid intake (water, soups, tea, fruit).
                </li>
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-secondary text-sm">check</span></div>
                  Chew gum or suck on ice chips to satisfy thirst without drinking too much.
                </li>
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-secondary text-sm">check</span></div>
                  Follow the specific fluid limit given by your nephrologist.
                </li>
              </ul>
            </Reveal>
          </div>
          <div className="lg:w-1/2 relative group">
            <Reveal direction="right">
              <div className="aspect-video lg:aspect-square w-full rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                <img src="/images/care_step2_fluids.png" alt="Fluid Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Step 3: Medication */}
        <section className="mb-32 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <Reveal direction="right">
              <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">medication</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">Medication Adherence</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Taking your medicines exactly as prescribed is one of the most important things you can do for your health.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-primary text-sm">check</span></div>
                  Always take your blood pressure medications on time.
                </li>
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-primary text-sm">check</span></div>
                  Do not skip doses, even if you are feeling well.
                </li>
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-primary text-sm">check</span></div>
                  Consult your NRS doctor before taking any over-the-counter supplements.
                </li>
              </ul>
            </Reveal>
          </div>
          <div className="lg:w-1/2 relative group">
            <Reveal direction="left">
              <div className="aspect-video lg:aspect-[4/3] w-full rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                <img src="/images/care_step3_medication.png" alt="Medication Adherence" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Step 4: Mental Wellness */}
        <section className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2">
            <Reveal direction="left">
              <div className="w-20 h-20 bg-secondary/20 rounded-3xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary text-4xl">self_improvement</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">Mental & Physical Activity</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Managing a chronic illness can be stressful, but staying active and maintaining your mental health directly supports your physical well-being.
              </p>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-secondary text-sm">check</span></div>
                  Engage in light, approved exercise like walking or stretching.
                </li>
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-secondary text-sm">check</span></div>
                  Talk to your family, support groups, or a counselor about your feelings.
                </li>
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300 text-lg font-medium">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5"><span className="material-symbols-outlined text-secondary text-sm">check</span></div>
                  Make time for hobbies and activities that bring you joy.
                </li>
              </ul>
            </Reveal>
          </div>
          <div className="lg:w-1/2 relative group">
            <Reveal direction="right">
              <div className="aspect-video lg:aspect-[4/3] w-full rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                <img src="/images/care_step4_activity.png" alt="Mental and Physical Activity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
    </div>
  );
};

export default PatientCare;
