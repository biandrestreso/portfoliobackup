import React from 'react';
import Layout from './layout';
import { PortfolioLanding } from '@/components/landing';
import { PortfolioTimeline } from '@/components/timeline';

const Home = () => {
  return (
    <Layout>
      <div className="select-none snap-y snap-mandatory">
        <section id="landing" className="snap-center">
          <PortfolioLanding />
        </section>
        <section id="timeline" className="snap-center">
          <PortfolioTimeline />
        </section>
      </div>
    </Layout>
  );
};

export default Home;