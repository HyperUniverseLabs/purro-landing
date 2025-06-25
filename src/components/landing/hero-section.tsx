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
        <a href={`#${SECTION_ID[5]}`}>
          <SecondaryBtn className="!bg-yellow-200/20 text-yellow-400 font-semibold inline-flex gap-2 items-center px-[22px] py-[12px] animate-bounce">
            <img src="/purrbot.png" width={24} height={24} alt="purrbot icon" />
            <p className="leading-none">$HBABY Pre-sale</p>
            <ArrowDown className="w-4 h-4" />
          </SecondaryBtn>
        </a>

        <div className="mb-10">
          <h1 className="font-display text-[24px] md:text-7xl font-semibold mb-6">
            Revolutionize Your Crypto Trading with AI-Powered Intelligence
          </h1>
          <p>
            Experience the future of cryptocurrency trading with HyperbabyAI -
            your sophisticated AI companion for making smarter, data-driven
            trading decisions. Built on Hyperliquid infrastructure, we&apos;re
            transforming how traders analyze and execute in the crypto markets.
          </p>
        </div>
        <div className="w-full mx-auto flex items-center justify-center gap-2">
          <a href="https://app.hyperbaby.fun/">
            <PrimaryBtn>Launch App</PrimaryBtn>
          </a>
          <a href="https://www.hyperuniverse.fun/" target="_blank">
            <PrimaryBtn className="!bg-white/5">Our Services</PrimaryBtn>
          </a>
        </div>
        <p className="absolute bottom-0 left-0 right-0 pb-10 text-xs max-w-[400px] sm:max-w-[752px] mx-auto">
          With advanced AI algorithms and data-driven analysis, we empower
          traders to thrive in the fast-paced cryptocurrency markets.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
