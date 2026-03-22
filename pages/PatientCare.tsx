import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';

const PatientCare: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
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
        
        {/* Kidney Disease Information Accordion */}
        <section className="mb-32 pt-10">
          <Reveal width="100%">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white text-center relative z-10">About Kidney Disease</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-3xl mx-auto relative z-10">
                Getting the facts about chronic kidney disease will help you take care of your health daily, helping you to plan ahead and be in charge of your choices.
              </p>

              <div className="space-y-4 max-w-4xl mx-auto relative z-10">
                {/* Accordion 1 */}
                <div className="border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md">
                  <button 
                    onClick={() => toggleAccordion(0)}
                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left font-bold text-lg md:text-xl text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl">psychology</span>
                      </div>
                      How kidneys work
                    </div>
                    <span className={`material-symbols-outlined transition-transform duration-300 bg-slate-100 dark:bg-slate-700 rounded-full p-1 ${openAccordion === 0 ? 'rotate-180 bg-primary/20 text-primary' : ''}`}>expand_more</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === 0 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 md:px-8 pb-8 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      <div className="h-px w-full bg-slate-100 dark:bg-slate-700/50 mb-6"></div>
                      <p className="mb-6">Kidneys are organs shaped like beans, about the size of fists, found on either side of your spine near the middle of your back. These wonderful organs help keep you healthy in so many ways—which is why kidney function is so important to your overall health and well-being.</p>
                      
                      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-6">
                        <p className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">lightbulb</span> Did you know?
                        </p>
                        <p>Most people are born with 2 kidneys, but you only need 1 to live a healthy life. Your kidneys remove the extra body water and waste products 24 hours a day. The extra body water and waste products come out of your body as urine.</p>
                      </div>

                      <p className="mb-4 font-medium text-slate-900 dark:text-white">The kidneys don’t just clean your blood, they do other important functions in your overall health. Everyday, your kidneys are:</p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary text-base mt-1">check_circle</span>
                          Releasing hormones to help regulate blood pressure
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary text-base mt-1">check_circle</span>
                          Controlling sodium and fluid levels in your body
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary text-base mt-1">check_circle</span>
                          Stimulating production of red blood cells, which carry oxygen throughout the body
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-primary text-base mt-1">check_circle</span>
                          Converting vitamin D to an active form to help your body absorb calcium
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Accordion 2 */}
                <div className="border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md">
                  <button 
                    onClick={() => toggleAccordion(1)}
                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left font-bold text-lg md:text-xl text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary text-xl">favorite</span>
                      </div>
                      What do I do to keep my kidneys healthy?
                    </div>
                    <span className={`material-symbols-outlined transition-transform duration-300 bg-slate-100 dark:bg-slate-700 rounded-full p-1 ${openAccordion === 1 ? 'rotate-180 bg-secondary/20 text-secondary' : ''}`}>expand_more</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === 1 ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 md:px-8 pb-8 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      <div className="h-px w-full bg-slate-100 dark:bg-slate-700/50 mb-6"></div>
                      <p className="mb-6">You can protect your kidneys by living a healthy lifestyle. Here are some tips that may help keep your body healthy, including your kidneys:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-secondary text-xl shrink-0">nutrition</span>
                          <p><strong>Eat healthy food:</strong> fresh fruits, fresh or frozen vegetables, whole grains, and low-fat dairy. Avoid processed foods.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-secondary text-xl shrink-0">favorite</span>
                          <p><strong>Keep your blood pressure normal:</strong> reduce amount of salt and added sugar, reduce or stop drinking alcohol.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-secondary text-xl shrink-0">sprint</span>
                          <p><strong>Make physical activity a part of your routine</strong> and aim for a healthy weight.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-secondary text-xl shrink-0">water_drop</span>
                          <p><strong>Drink lots of fluids:</strong> You should aim to produce urine that is straw colored or lighter.</p>
                        </div>
                        <div className="flex items-start gap-3 md:col-span-2">
                          <span className="material-symbols-outlined text-secondary text-xl shrink-0">history</span>
                          <p><strong>Know your family medical history:</strong> risk factors like diabetes, high blood pressure, or history of kidney failure. Talk to your doctor to decide the tests you require.</p>
                        </div>
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-xl flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary">record_voice_over</span> Be your own advocate
                        </h4>
                        <p className="mb-4">Get an annual physical check-up and ask the following questions when you visit a doctor, clinical officer or nurse:</p>
                        <div className="columns-1 md:columns-2 gap-8 text-base">
                          <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                            <li>What is my glomerular filtration rate (GFR)?</li>
                            <li>What is my urine albumin result?</li>
                            <li>What is my blood pressure?</li>
                            <li>What is my blood glucose (for diabetes)?</li>
                            <li>How often should I get checked?</li>
                            <li>What should I do to stay healthy?</li>
                            <li>Do I need to be taking different medicines?</li>
                            <li>Should I be more physically active?</li>
                            <li>What can I eat & am I at a healthy weight?</li>
                            <li>Do I need to talk with a dietitian?</li>
                            <li>What happens if I have kidney disease?</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accordion 3 */}
                <div className="border border-slate-200 dark:border-slate-700/50 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md">
                  <button 
                    onClick={() => toggleAccordion(2)}
                    className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left font-bold text-lg md:text-xl text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary text-xl">biotech</span>
                      </div>
                      Understanding Chronic Kidney Disease
                    </div>
                    <span className={`material-symbols-outlined transition-transform duration-300 bg-slate-100 dark:bg-slate-700 rounded-full p-1 ${openAccordion === 2 ? 'rotate-180 bg-primary/20 text-primary' : ''}`}>expand_more</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === 2 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 md:px-8 pb-8 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                      <div className="h-px w-full bg-slate-100 dark:bg-slate-700/50 mb-6"></div>
                      <p className="mb-6">Kidney disease happens when your kidneys don’t work as well as they should to remove waste, toxins and extra fluid from your body.</p>
                      
                      <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 p-6 rounded-2xl mb-6">
                        <p className="font-bold text-red-800 dark:text-red-400 mb-2">Leading Causes in Zambia:</p>
                        <p className="text-red-700 dark:text-red-300">Diabetes, high blood pressure (hypertension), glomerularnephritis, and HIV/AIDS. Other factors such as ethnicity, weight, family history and age can predispose you to kidney failure.</p>
                      </div>

                      <p className="mb-6">Kidney disease can develop over a period of months to years and is irreversible. However, with an early diagnosis, the right treatment choice, and some lifestyle changes, it can be slowed down or in some cases even stopped. It is divided into 5 stages:</p>
                      
                      <div className="space-y-4">
                        <div className="flex gap-4 items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                          <div className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-black w-10 h-10 rounded-lg flex items-center justify-center shrink-0">1-2</div>
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white">Kidney damage with normal or mild loss of function</p>
                            <p className="text-sm mt-1">What to look out for: high blood pressure, swollen legs, urinary tract infections.</p>
                          </div>
                        </div>
                        <div className="flex gap-4 items-start bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
                          <div className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white font-black w-10 h-10 rounded-lg flex items-center justify-center shrink-0">3</div>
                          <div>
                            <p className="font-bold text-slate-900 dark:text-white">Moderate to severe</p>
                            <p className="text-sm mt-1">Moderate to severe loss of kidney function.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action Inside Container */}
              <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Book your comprehensive medical check</h3>
                  <p className="text-slate-500 max-w-md">Our team of specialists can help you diagnose and manage your renal health effectively.</p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <a href="tel:+61426170805" className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-full font-bold hover:bg-slate-50 hover:shadow-md transition-all">
                    Call Us
                  </a>
                  <Link to="/contact" className="px-6 py-3 bg-primary text-slate-900 rounded-full font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">edit_document</span> Fill out the form
                  </Link>
                </div>
              </div>

            </div>
          </Reveal>
        </section>

        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Patient Pre-Care Guidelines</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
        </Reveal>

        {/* Step 1: Diet Section */}
        <section className="mb-32 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <Reveal direction="right">
              <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">restaurant_menu</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">Nutrition & Diet</h2>
              <div className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed space-y-6">
                <p>
                  A kidney-friendly diet helps protect your kidneys from further damage and limits the buildup of minerals in your blood.
                </p>
                <p>
                  Being on dialysis, it is important to adjust your eating and drinking habits to help you feel better and stay healthy. These changes don’t have to be a burden. Taking control of what you eat – and how much – can really impact your overall health.
                </p>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">You are what you eat</h3>
                  <p>
                    What you eat and drink will truly affect your health. Your body is processing certain foods differently now, plus important vitamins and nutrients can be washed away during the dialysis process. Choosing the right foods and drinks can help you feel better.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Making Changes</h3>
                  <p>
                    Following new guidelines for eating and drinking may be a big change, but it’s also one you can control. The good news is that you can usually do this without completely giving up your favorite foods – or giving up flavour.
                  </p>
                </div>
              </div>
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
