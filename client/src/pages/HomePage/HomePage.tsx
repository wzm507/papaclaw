import React from 'react';
import { HeroSection } from './HeroSection';
import StatCardSection from './StatCardSection';
import TeamSection from './TeamSection';
import BusinessSection from './BusinessSection';
import { ValueComparison } from './ValueComparison';
import { CtaSection } from './CtaSection';

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <StatCardSection />
      <TeamSection />
      <BusinessSection />
      <ValueComparison />
      <CtaSection />
    </div>
  );
}