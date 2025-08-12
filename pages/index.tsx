import Head from 'next/head';
import Homepage from '../components/Homepage';

export default function Home() {
  return (
    <>
      <Head>
        <title>InfluBridge - Where Brands & Creators Thrive Together</title>
        <meta name="description" content="Find influencers, collaborate on campaigns, and track success — all in one place. The next-gen platform for authentic brand-creator partnerships." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="InfluBridge - Where Brands & Creators Thrive Together" />
        <meta property="og:description" content="Find influencers, collaborate on campaigns, and track success — all in one place." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://influbridge.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="InfluBridge - Where Brands & Creators Thrive Together" />
        <meta name="twitter:description" content="Find influencers, collaborate on campaigns, and track success — all in one place." />
        
        {/* Additional SEO */}
        <meta name="keywords" content="influencer marketing, brand partnerships, creator collaborations, social media marketing, campaign management" />
        <meta name="author" content="InfluBridge" />
      </Head>
      <Homepage />
    </>
  );
}
