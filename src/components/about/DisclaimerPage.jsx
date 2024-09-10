import React from 'react';

const DisclaimerPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>
      <main className="space-y-4">
        <section aria-labelledby="general-info">
          <h2 id="general-info" className="text-2xl font-semibold">General Information:</h2>
          <p>
            The following information is provided as a general overview of the services offered by KS Wealth Coach. 
            Please note that this disclaimer outlines important points to consider before engaging with our firm. 
            The content on this landing page is intended to provide information about KS Wealth Coach and its wealth 
            multiplication strategy based solely on client specific investment Objectives, risk tolerances & financial 
            information provided.
          </p>
        </section>

        <section aria-labelledby="educational-purposes">
          <h2 id="educational-purposes" className="text-2xl font-semibold">Educational Purposes:</h2>
          <p>
            The wealth multiplication strategy discussed is for educational purposes only. It is designed to provide 
            insights into capital protection, risk management, and diversification principles.
          </p>
        </section>

        <section aria-labelledby="regulatory-guidelines">
          <h2 id="regulatory-guidelines" className="text-2xl font-semibold">Regulatory Guidelines:</h2>
          <p>
            KS Wealth Coach operates under regulatory guidelines and strives to adhere to relevant laws and regulations. 
            However, it is important to note that regulatory requirements may vary by jurisdiction, and it is the 
            responsibility of individuals to comply with local laws and regulations regarding investments and financial matters.
          </p>
        </section>

        <section aria-labelledby="risk-disclosure">
          <h2 id="risk-disclosure" className="text-2xl font-semibold">Risk Disclosure:</h2>
          <p>
            While KS Wealth Coach aims to create financial awareness to mitigate risks associated with over-diversification, 
            over-churning, outdated investment options, hidden risks, & liquidity risks, it is essential to acknowledge that 
            investment involves inherent risks. Past performance is not indicative of future results, and there is no guarantee 
            that any investment strategy will be successful.
          </p>
        </section>

        <section aria-labelledby="external-links">
          <h2 id="external-links" className="text-2xl font-semibold">External Links:</h2>
          <p>
            Our landing page may contain links to external websites or resources. KS Wealth Coach is not responsible for the 
            content, accuracy, or reliability of any information provided on these external sites. The inclusion of any link 
            does not imply endorsement or recommendation.
          </p>
        </section>

        <section aria-labelledby="limitation-of-liability">
          <h2 id="limitation-of-liability" className="text-2xl font-semibold">Limitation of Liability:</h2>
          <p>
            KS Wealth Coach, its employees, and affiliates shall not be held liable for any direct, indirect, incidental, 
            consequential, or punitive damages arising from the use of our services, including but not limited to financial 
            losses, lost opportunities, or any other damages.
          </p>
        </section>

        <p className="font-semibold">
          By accessing our landing page and engaging with our services, you acknowledge and accept the above disclaimers. 
          It is important to carefully consider your individual financial goals, risk tolerance & read additional informations 
          carefully before making any investment decisions.
        </p>
      </main>
    </div>
  );
};

export default DisclaimerPage;