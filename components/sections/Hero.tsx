import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 lg:pt-24 pb-16 lg:pb-24 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="gradient-blob w-96 h-96 bg-grad-primary -top-20 -left-20"></div>
      <div className="gradient-blob w-80 h-80 bg-grad-accent -bottom-10 -right-20"></div>
      
      <div className="relative max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-text leading-tight">
                Where Brands & <span className="text-gradient-primary">Creators</span> Thrive Together
              </h1>
              <p className="text-lg lg:text-xl text-text-muted max-w-2xl">
                Find influencers, collaborate on campaigns, and track success — all in one place.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search influencers by name, niche, or reach"
                className="w-full pl-12 pr-4 py-4 bg-white rounded-full border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-text"
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-center">
                For Brands
              </button>
              <button className="btn-secondary text-center">
                For Influencers
              </button>
            </div>
          </div>

          {/* Right Content - Influencer Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="card p-6 w-full max-w-sm animate-float">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent1 to-accent1-2 rounded-full flex items-center justify-center animate-pulse-glow">
                    <span className="text-white font-heading font-semibold text-lg">AZ</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-text">@alex_zen</h3>
                  <p className="text-sm text-text-muted mb-2">Lifestyle & Wellness</p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Followers</span>
                      <span className="font-data font-medium text-text">124.5K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Engagement Rate</span>
                      <span className="font-data font-medium text-secondary">4.8%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 py-2 bg-background-alt hover:bg-primary hover:text-white transition-all duration-200 rounded-lg font-medium text-text">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
