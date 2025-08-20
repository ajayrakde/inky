import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "InfluBridge transformed how we connect with creators. The analytics are incredible and payments are seamless.",
      author: "Sarah Chen",
      handle: "@fashionforwardco",
      role: "Brand Marketing Director",
      avatar: "SC"
    },
    {
      quote: "Finally, a platform that actually cares about creators. Fast payments and fair deals - what more could you ask for?",
      author: "Marcus Johnson",
      handle: "@marcus_lifestyle",
      role: "Lifestyle Influencer",
      avatar: "MJ"
    },
    {
      quote: "The campaign management tools are game-changing. We've increased our influencer ROI by 300% since switching.",
      author: "Elena Rodriguez",
      handle: "@techbrand",
      role: "Growth Marketing Lead",
      avatar: "ER"
    },
    {
      quote: "Love the transparency and the community. InfluBridge feels like it was built by creators, for creators.",
      author: "Alex Thompson",
      handle: "@alexfitness",
      role: "Fitness Content Creator",
      avatar: "AT"
    },
    {
      quote: "The escrow system gives us complete confidence in every collaboration. Zero payment disputes in 6 months!",
      author: "David Kim",
      handle: "@startupgrind",
      role: "Startup Founder",
      avatar: "DK"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 lg:py-24 bg-background-alt">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-text mb-6">
            What Our Community <span className="text-gradient-secondary">Says</span>
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Real feedback from brands and creators who've found success on our platform
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="card p-8 lg:p-12 text-center max-w-3xl mx-auto">
                    {/* Quote */}
                    <div className="mb-8">
                      <svg className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                      <blockquote className="text-lg lg:text-xl text-text leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent1 to-accent1-2 rounded-full flex items-center justify-center animate-pulse-glow">
                          <span className="text-white font-heading font-semibold text-lg">
                            {testimonial.avatar}
                          </span>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="font-heading font-semibold text-text">
                          {testimonial.author}
                        </div>
                        <div className="text-primary font-medium">
                          {testimonial.handle}
                        </div>
                        <div className="text-text-muted text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 w-12 h-12 bg-grad-primary rounded-full flex items-center justify-center text-white shadow-soft hover:shadow-hover transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 w-12 h-12 bg-grad-primary rounded-full flex items-center justify-center text-white shadow-soft hover:shadow-hover transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-text-muted/30 hover:bg-text-muted/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="font-data font-bold text-3xl text-primary mb-2">10K+</div>
            <div className="text-text-muted">Active Creators</div>
          </div>
          <div className="text-center">
            <div className="font-data font-bold text-3xl text-secondary mb-2">500+</div>
            <div className="text-text-muted">Partner Brands</div>
          </div>
          <div className="text-center">
            <div className="font-data font-bold text-3xl text-accent1 mb-2">50K+</div>
            <div className="text-text-muted">Campaigns Launched</div>
          </div>
          <div className="text-center">
            <div className="font-data font-bold text-3xl text-accent2 mb-2">4.9★</div>
            <div className="text-text-muted">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
