import { SECTION_ID } from "@/lib/section-id";
import { PrimaryBtn, SecondaryBtn } from "../common";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id={SECTION_ID[1]}
      className="min-h-screen pt-16 relative hero-section flex items-center justify-center pb-10 text-white px-[24px] md:px-[48px] "
    >
      <div className="text-center container mx-auto mb-40 space-y-8 max-w-[1064px]">
        <div className="mb-10">
          <h1 className="font-display text-[24px] md:text-7xl font-semibold mb-6">
            Still using old-school wallets in Web3? Yikes.
          </h1>
          <p>
            With Purro, if you’re not getting rich… at least you’re suffering
            less.
          </p>
        </div>
        <div className="w-full mx-auto flex items-center justify-center gap-2">
          <a href="https://app.hyperbaby.fun/">
            <PrimaryBtn>Download For Chrome</PrimaryBtn>
          </a>
          <a href="https://www.hyperuniverse.fun/" target="_blank">
            <PrimaryBtn className="bg-white/5!">Follow Purro</PrimaryBtn>
          </a>
        </div>
        {/* <p className="absolute bottom-0 left-0 right-0 pb-10 text-xs max-w-[400px] sm:max-w-[752px] mx-auto">
          With advanced AI algorithms and data-driven analysis, we empower
          traders to thrive in the fast-paced cryptocurrency markets.
        </p> */}
      </div>
    </section>
  );
};

export default HeroSection;
