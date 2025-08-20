import React from 'react';

const DealTypes: React.FC = () => {
  const dealTypes = [
    {
      title: 'Pay per Post',
      description: 'Fixed payment for content creation and posting across platforms',
      features: ['Guaranteed content delivery', 'Usage rights included', 'Performance tracking'],
      gradient: 'grad-primary',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      title: 'Discount Campaign',
      description: 'Revenue-sharing model with custom discount codes and affiliate tracking',
      features: ['No upfront costs', 'Performance-based rewards', 'Long-term partnerships'],
      gradient: 'grad-secondary',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    {
      title: 'Pay per Engagement',
      description: 'Performance-driven campaigns paying based on likes, shares, and interactions',
      features: ['Risk-free for brands', 'Higher earning potential', 'Quality-focused content'],
      gradient: 'grad-accent',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="deal-types" className="py-16 lg:py-24 bg-background-alt">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-text mb-6">
            Flexible <span className="text-gradient-primary">Deal Types</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Choose the collaboration model that works best for your brand and campaign goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dealTypes.map((deal, index) => (
            <div key={index} className="group">
              <div className="card p-0 h-full overflow-hidden relative">
                {/* Header with gradient */}
                <div className={`bg-${deal.gradient} p-6 relative`}>
                  <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-lg shadow-soft flex items-center justify-center text-text group-hover:scale-110 transition-transform duration-300">
                    {deal.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 pt-10">
                  <h3 className="font-heading font-semibold text-xl text-text mb-3">
                    {deal.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-6 leading-relaxed">
                    {deal.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {deal.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-secondary to-secondary-2 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-text text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full bg-${deal.gradient} text-white py-3 rounded-lg font-medium hover:shadow-hover hover:scale-105 transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="font-heading font-semibold text-2xl text-text mb-4">
              Not sure which model works best?
            </h3>
            <p className="text-text-muted mb-6">
              Our team can help you choose the right collaboration approach for your specific goals and budget.
            </p>
            <button className="btn-accent">
              Get Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealTypes;
