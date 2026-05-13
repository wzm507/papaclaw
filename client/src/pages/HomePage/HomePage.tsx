import React from 'react';
import { HeroSection } from './HeroSection';
import StatCardSection from './StatCardSection';
import { TeamOverview } from './TeamOverview';
import { ServicesOverview } from './ServicesOverview';
import { ValueComparison } from './ValueComparison';
import { CtaSection } from './CtaSection';

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <StatCardSection />
      <TeamOverview />
      <ServicesOverview />
      <ValueComparison />
      <CtaSection />
    </div>
  );
}