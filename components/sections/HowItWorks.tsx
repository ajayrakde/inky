import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Discover Influencers',
      description: 'Browse verified creators across all platforms and niches',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      bgColor: 'bg-grad-primary'
    },
    {
      number: 2,
      title: 'Send Proposal',
      description: 'Create custom campaign briefs and send collaboration requests',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      bgColor: 'bg-grad-secondary'
    },
    {
      number: 3,
      title: 'Collaborate & Track',
      description: 'Manage campaigns with real-time analytics and feedback tools',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      bgColor: 'bg-grad-accent'
    },
    {
      number: 4,
      title: 'Get Paid',
      description: 'Secure payments with escrow protection and instant payouts',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      bgColor: 'bg-gradient-to-br from-accent2 to-primary-2'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background-alt relative">
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent1/10 to-transparent rounded-tl-full"></div>
      
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-text mb-6">
            How It <span className="text-gradient-accent">Works</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Simple, transparent, and designed for both brands and creators to succeed together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px border-t-2 border-dashed border-text-muted/30 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={step.number} className="relative z-10">
              <div className="card p-6 text-center h-full">
                {/* Icon with number */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center text-white shadow-soft`}>
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-text rounded-full flex items-center justify-center">
                    <span className="text-white font-data font-bold text-sm">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="font-heading font-semibold text-lg text-text mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile connection indicators */}
        <div className="lg:hidden flex justify-center mt-8 space-x-2">
          {steps.map((_, index) => (
            <div key={index} className="flex items-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              {index < steps.length - 1 && (
                <div className="w-8 h-px bg-text-muted/30 mx-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
