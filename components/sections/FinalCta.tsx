import React from 'react';

const FinalCta: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-grad-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Decorative circles */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full opacity-20"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white rounded-full opacity-15"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-white rounded-full opacity-10"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-semibold text-white mb-6 leading-tight">
            Ready to Start <br className="hidden sm:block" />
            <span className="text-white/90">Collaborating?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Secure, transparent, and fun for influencers and brands.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="font-data font-bold text-3xl lg:text-4xl text-white mb-2">
                10K+
              </div>
              <div className="text-white/80">
                Active Creators
              </div>
            </div>
            <div className="text-center">
              <div className="font-data font-bold text-3xl lg:text-4xl text-white mb-2">
                $2.5M+
              </div>
              <div className="text-white/80">
                Paid Out
              </div>
            </div>
            <div className="text-center">
              <div className="font-data font-bold text-3xl lg:text-4xl text-white mb-2">
                99.9%
              </div>
              <div className="text-white/80">
                Uptime
              </div>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mb-8">
            <button className="bg-white text-primary px-12 py-4 rounded-lg font-heading font-semibold text-lg shadow-soft hover:shadow-hover hover:scale-105 transition-all duration-300 mx-auto">
              Start Your First Campaign
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <a href="#" className="flex items-center space-x-2 hover:text-white transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Chat with our team</span>
            </a>
            
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            
            <a href="#" className="flex items-center space-x-2 hover:text-white transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Watch demo video</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">
              Trusted by leading brands and creators worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {/* Brand logos placeholders */}
              <div className="w-20 h-8 bg-white/20 rounded"></div>
              <div className="w-24 h-8 bg-white/20 rounded"></div>
              <div className="w-16 h-8 bg-white/20 rounded"></div>
              <div className="w-28 h-8 bg-white/20 rounded"></div>
              <div className="w-18 h-8 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
