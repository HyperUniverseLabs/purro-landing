"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border border-white/20 bg-opacity-8 bg-white/10 cursor-pointer rounded-3xl p-7 transition-colors duration-200"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center gap-10">
        <div className="font-semibold text-white max-w-[720px]">{title}</div>
        <div
          className={`transform transition-transform duration-200 bg-yellow-300 rounded-full p-2 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <Plus />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pt-4" : "max-h-0"
        }`}
      >
        <p className="text-lg pr-16 text-white/80">{content}</p>
      </div>
    </div>
  );
};
const faqData: AccordionItemProps[] = [
  {
    title: "What is HyperbabyAI?",
    content:
      "HyperbabyAI is an AI-powered trading analysis platform built on Hyperliquid infrastructure. We combine multiple AI models to provide sophisticated market insights, trend analysis, and trading signals.",
  },
  {
    title: "How does it work?",
    content:
      "Our platform integrates advanced AI models (GPT-4, Claude, Gemini) with Langchain framework to analyze market data and generate trading insights. We provide entry/exit signals, risk indicators, and position sizing recommendations.",
  },
  {
    title: "What subscription plans do you offer?",
    content:
      "Basic (Free): Essential trading features; Premium (30 USDC/month): Advanced signals and portfolio analysis; Pro (100 USDC/month): API access and custom strategies",
  },
  {
    title: "Do I need a specific wallet to use HyperbabyAI?",
    content:
      "Our platform uses Privy Wallet, allowing you to log in using email or social login while benefiting from our AI analysis tools.",
  },
  {
    title: "How is my data protected?",
    content:
      "We implement enterprise-grade security standards with zero-knowledge proof technology. Your trading data is encrypted and we never store private keys.",
  },
  {
    title: "When can I start using HyperbabyAI?",
    content:
      "Our initial launch is scheduled for Q1-Q2 2025, with advanced features rolling out in Q3 2025.",
  },
  {
    title: "Can I integrate HyperbabyAI with my existing trading setup?",
    content:
      "Yes. We offer API access in our Pro plan for seamless integration with your trading infrastructure.",
  },
  {
    title: "How can I purchase HBABY tokens?",
    content:
      "HBABY tokens will ONLY be available through our official presale on Hypurr. Any tokens found elsewhere before our official launch are unauthorized and fake. We will announce the presale details through our official channels with minimum 48-hour notice.",
  },
  {
    title: "What is the token distribution?",
    content:
      "88.50% Public Presale. 9% Development Fund. 2.50% Community Airdrops",
  },
];

const AccordionFAQs: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {faqData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default AccordionFAQs;
