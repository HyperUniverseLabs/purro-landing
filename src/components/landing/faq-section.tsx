"use client";

import { SECTION_ID } from "@/lib/section-id";
import { HeadCard } from "../card";
import AccordionFAQs from "../accordion-faqs";

const FAQSection: React.FC = () => {
  return (
    <section
      id={SECTION_ID[7]}
      className="min-h-screen container-small space-y-3 pb-[88px]"
    >
      <HeadCard
        primaryText="Your Burning"
        secondaryText="Questions Answered"
        primaryTextColor="text-white/60"
        secondaryTextColor="text-white"
        bgColor="bg-black"
      />
      <AccordionFAQs />
    </section>
  );
};

export default FAQSection;
