import React from 'react';

const CrmPayments: React.FC = () => {
  const features = [
    {
      title: 'Escrow Payment Protection',
      description: 'Funds held securely until campaign completion',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Fast Payouts',
      description: 'Receive payments within 24 hours of approval',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Low Platform Fee (1%)',
      description: 'Industry-leading transparent fee structure',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="gradient-blob w-96 h-96 bg-grad-accent top-0 -left-20"></div>
      <div className="gradient-blob w-80 h-80 bg-grad-secondary bottom-0 -right-20"></div>
      
      <div className="relative max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-text mb-6">
            CRM & Payment <span className="text-gradient-accent">Transparency</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Complete campaign management with secure, transparent payment processing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Dashboard Mock */}
          <div className="order-2 lg:order-1">
            <div className="card p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading font-semibold text-xl text-text">Campaign Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-sm text-text-muted">Live Data</span>
                </div>
              </div>

              {/* Payments Due */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-text-muted">Payments Due</span>
                  <span className="font-data font-bold text-2xl text-primary">$12,450</span>
                </div>
                <div className="w-full bg-background-alt rounded-full h-2">
                  <div className="bg-grad-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-text-muted mt-1">
                  <span>65% processed</span>
                  <span>$7,000 pending</span>
                </div>
              </div>

              {/* Conversions */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-text-muted">Conversions</span>
                  <span className="font-data font-bold text-2xl text-secondary">342</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-text-muted">Direct</span>
                    <span className="font-data font-medium">89%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent2 rounded-full"></div>
                    <span className="text-text-muted">Referral</span>
                    <span className="font-data font-medium">11%</span>
                  </div>
                </div>
              </div>

              {/* ROI Chart */}
              <div>
                <h4 className="font-heading font-semibold text-text mb-4">ROI Trend</h4>
                <div className="flex items-end justify-between h-24 space-x-1">
                  {[40, 65, 45, 80, 60, 95, 75].map((height, index) => (
                    <div key={index} className="flex-1 bg-grad-accent rounded-t opacity-80" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-text-muted mt-2">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="order-1 lg:order-2 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-grad-secondary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-lg text-text mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Trust Indicators */}
            <div className="card p-6 bg-grad-primary text-white">
              <div className="text-center">
                <div className="flex justify-center space-x-6 mb-4">
                  <div className="text-center">
                    <div className="font-data font-bold text-2xl">$2.5M+</div>
                    <div className="text-white/80 text-sm">Paid Out</div>
                  </div>
                  <div className="text-center">
                    <div className="font-data font-bold text-2xl">99.9%</div>
                    <div className="text-white/80 text-sm">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="font-data font-bold text-2xl">24/7</div>
                    <div className="text-white/80 text-sm">Support</div>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  Trusted by 10,000+ creators and 500+ brands worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrmPayments;
