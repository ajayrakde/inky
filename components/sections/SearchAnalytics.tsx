import React from 'react';

const SearchAnalytics: React.FC = () => {
  const filterOptions = [
    { label: 'Niche', value: 'Lifestyle' },
    { label: 'Platform', value: 'Instagram' },
    { label: 'Location', value: 'United States' },
    { label: 'Followers', value: '10K - 100K' },
    { label: 'Engagement', value: '3% - 8%' },
  ];

  const metrics = [
    {
      title: 'Engagement Rate',
      value: '6.2%',
      trend: '+0.8%',
      color: 'accent1',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Compatibility Score',
      value: '89/100',
      trend: 'Excellent',
      color: 'accent2',
      gauge: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Fake Follower %',
      value: '2.1%',
      trend: 'Low Risk',
      color: 'secondary',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="gradient-blob w-80 h-80 bg-grad-secondary top-1/4 -left-40"></div>
      <div className="gradient-blob w-96 h-96 bg-grad-primary -top-20 -right-40"></div>
      
      <div className="relative max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-text mb-6">
            Advanced Search & <span className="text-gradient-secondary">Analytics</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Powerful filters and real-time insights to find the perfect creator match
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Advanced Filters */}
          <div className="card p-8">
            <h3 className="font-heading font-semibold text-xl text-text mb-6 flex items-center">
              <div className="w-8 h-8 bg-grad-accent rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                </svg>
              </div>
              Advanced Filters
            </h3>
            
            <div className="space-y-4">
              {filterOptions.map((filter, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-background-alt rounded-lg">
                  <span className="font-medium text-text-muted">{filter.label}</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-data font-medium text-text">{filter.value}</span>
                    <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              ))}
              
              <button className="w-full mt-6 btn-accent">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Analytics Cards */}
          <div className="space-y-6">
            {metrics.map((metric, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${metric.color} to-${metric.color}-2 rounded-lg flex items-center justify-center text-white`}>
                      {metric.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-text mb-1">{metric.title}</h4>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-data font-bold text-text">{metric.value}</span>
                        <span className={`text-sm font-medium ${
                          metric.color === 'secondary' ? 'text-secondary' : 
                          metric.color === 'accent1' ? 'text-accent1' : 'text-accent2'
                        }`}>
                          {metric.trend}
                        </span>
                      </div>
                      
                      {metric.gauge && (
                        <div className="mt-3">
                          <div className="w-full bg-background-alt rounded-full h-2">
                            <div className="bg-grad-accent h-2 rounded-full" style={{ width: '89%' }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="card p-6 bg-grad-primary text-white">
              <div className="text-center">
                <h4 className="font-heading font-semibold text-lg mb-2">AI-Powered Matching</h4>
                <p className="text-white/90 text-sm mb-4">
                  Our algorithm analyzes 50+ data points to find your perfect creator match
                </p>
                <button className="bg-white text-primary px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchAnalytics;
