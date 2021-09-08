/* eslint-disable @typescript-eslint/quotes */
import { useEffect } from 'react';
import type { FC } from 'react';
import {
  HomeClients,
  HomeHero,
  HomeOverview,
  HomeRoles,
  HomeFeatures,
  HomeTestimonials,
} from '../components/home';
import gtm from '../lib/gtm';

const Home: FC = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  return (
    <>
      <div>
        <HomeHero />
        <HomeOverview />
        <HomeRoles />
        <HomeTestimonials />
        <HomeFeatures />
        <HomeClients />
      </div>
    </>
  );
};

export default Home;
