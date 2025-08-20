import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [campaignValue, setCampaignValue] = useState(1000);
  
  const platformFee = campaignValue * 0.01;
  const paymentGatewayFee = campaignValue * 0.029; // Typical 2.9%
  const taxes = (platformFee + paymentGatewayFee) * 0.08; // 8% tax example
  const totalFees = platformFee + paymentGatewayFee + taxes;
  const netPayout = campaignValue - totalFees;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCampaignValue(parseInt(e.target.value));
  };

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="gradient-blob w-96 h-96 bg-grad-primary top-1/4 -left-40"></div>
      <div className="gradient-blob w-80 h-80 bg-grad-accent -top-20 -right-40"></div>
      
      <div className="relative max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-text mb-6">
            Simple & <span className="text-gradient-primary">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            No hidden fees, no monthly subscriptions. Pay only when you succeed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <div className="card p-8 lg:p-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="font-heading font-semibold text-2xl text-text mb-4">
                Pay-Per-Campaign Model
              </h3>
              <div className="flex items-baseline justify-center space-x-2">
                <span className="text-5xl font-data font-bold text-primary">1%</span>
                <span className="text-xl text-text-muted">platform fee</span>
              </div>
              <p className="text-text-muted mt-2">+ payment gateway fees + applicable taxes</p>
            </div>

            {/* Fee Calculator */}
            <div className="bg-background-alt rounded-lg-card p-8">
              <h4 className="font-heading font-semibold text-lg text-text mb-6 text-center">
                Fee Calculator
              </h4>
              
              {/* Campaign Value Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-text-muted font-medium">Campaign Value</label>
                  <span className="font-data font-bold text-2xl text-text">
                    ${campaignValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={campaignValue}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-text-muted mt-2">
                  <span>$100</span>
                  <span>$10,000</span>
                </div>
              </div>

              {/* Fee Breakdown */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-text-muted">Platform Fee (1%)</span>
                  <span className="font-data font-medium text-text">
                    ${platformFee.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-text-muted">Payment Gateway (2.9%)</span>
                  <span className="font-data font-medium text-text">
                    ${paymentGatewayFee.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-text-muted">Taxes (8%)</span>
                  <span className="font-data font-medium text-text">
                    ${taxes.toFixed(2)}
                  </span>
                </div>
                <hr className="border-text-muted/20" />
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-text">Total Fees</span>
                  <span className="font-data font-bold text-lg text-primary">
                    ${totalFees.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 bg-grad-secondary rounded-lg px-4">
                  <span className="font-medium text-white">Your Net Payout</span>
                  <span className="font-data font-bold text-xl text-white">
                    ${netPayout.toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full mt-6 btn-accent">
                Estimate My Fee
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-grad-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-heading font-semibold text-text mb-2">Secure Escrow</h4>
              <p className="text-text-muted text-sm">Payments protected until campaign completion</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-grad-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-heading font-semibold text-text mb-2">Instant Payouts</h4>
              <p className="text-text-muted text-sm">Receive funds within 24 hours of approval</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-grad-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="font-heading font-semibold text-text mb-2">Full Analytics</h4>
              <p className="text-text-muted text-sm">Track performance with detailed insights</p>
            </div>
          </div>

          {/* Comparison with Competitors */}
          <div className="card p-8">
            <h4 className="font-heading font-semibold text-xl text-text mb-6 text-center">
              How We Compare
            </h4>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-text-muted/20">
                    <th className="text-left py-3 px-4 font-medium text-text-muted">Feature</th>
                    <th className="text-center py-3 px-4 font-heading font-semibold text-primary">InfluBridge</th>
                    <th className="text-center py-3 px-4 font-medium text-text-muted">Competitor A</th>
                    <th className="text-center py-3 px-4 font-medium text-text-muted">Competitor B</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-text-muted/10">
                    <td className="py-3 px-4 text-text-muted">Platform Fee</td>
                    <td className="py-3 px-4 text-center font-data font-bold text-primary">1%</td>
                    <td className="py-3 px-4 text-center text-text">5-10%</td>
                    <td className="py-3 px-4 text-center text-text">3-8%</td>
                  </tr>
                  <tr className="border-b border-text-muted/10">
                    <td className="py-3 px-4 text-text-muted">Payout Time</td>
                    <td className="py-3 px-4 text-center font-medium text-secondary">24 hours</td>
                    <td className="py-3 px-4 text-center text-text">5-7 days</td>
                    <td className="py-3 px-4 text-center text-text">3-5 days</td>
                  </tr>
                  <tr className="border-b border-text-muted/10">
                    <td className="py-3 px-4 text-text-muted">Escrow Protection</td>
                    <td className="py-3 px-4 text-center text-secondary">✓</td>
                    <td className="py-3 px-4 text-center text-text">✗</td>
                    <td className="py-3 px-4 text-center text-text">Limited</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-text-muted">24/7 Support</td>
                    <td className="py-3 px-4 text-center text-secondary">✓</td>
                    <td className="py-3 px-4 text-center text-text">Business hours</td>
                    <td className="py-3 px-4 text-center text-text">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #FF4E6A, #FF7E7E);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #FF4E6A, #FF7E7E);
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default Pricing;
