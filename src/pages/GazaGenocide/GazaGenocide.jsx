import React from 'react';

const GazaGenocide = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      {/* Main Photo */}
      <div className="w-full h-auto flex items-center justify-center bg-yellow-300 pt-4"> 
        <img src="/Photo/gaza.jpg" alt="Gaza Crisis" className="w-full h-auto" />
      </div>

      {/* Text Part */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-center text-2xl md:text-5xl font-bold pt-12 md:pt-16">Genocide in Gaza</h1>
        <div className="text-base md:text-xl p-6 md:p-8 pt-4 pb-14 md:pb-20 space-y-4">
          <p>
            For over a year, the world has been bearing witness to unfathomable levels of death and destruction in the occupied Gaza Strip. Israel's brutal onslaught against Palestinians in Gaza has killed tens of thousands of people, wiped out entire families, flattened residential neighbourhoods, destroyed critical infrastructure and forcibly displaced 1.9 million Palestinians, over 90% of the population of the Gaza Strip, causing an unprecedented humanitarian catastrophe.
          </p>
          <p>
            During Israel's military operations in Gaza, which began following the Hamas-led attacks on 7 October, Israel adopted policies and took actions aimed at causing irreparable harm to Palestinians in Gaza. These include relentless bombardment which has killed and injured tens of thousands and caused unprecedented destruction, forced displacement of 90% of the population, and denial and restriction of essential services and of life-saving goods and humanitarian aid. This has led to the collapse of the water, sanitation, food production and healthcare systems in Gaza.
          </p>
          <p>
            Between October 2023 and July 2024, Israel committed acts prohibited under the Genocide Convention and did so with the specific intent to destroy Palestinians in Gaza. These acts include killings, inflicting serious physical or mental harm to members of the protected group and deliberately creating conditions of life calculated to bring about the physical destruction of Palestinians in Gaza.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GazaGenocide; 