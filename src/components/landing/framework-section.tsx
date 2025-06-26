import { SECTION_ID } from "@/lib/section-id";
import { BannerCard, HeadCard, VerticalCard } from "../card";
import { Brain } from "lucide-react";

const FrameworkSection = () => {
  return (
    <section
      id={SECTION_ID[4]}
      className="min-h-screen container-small space-y-3 pb-[88px]"
    >
      <HeadCard
        bgColor="bg-green-200"
        primaryText="Your AI Trading"
        secondaryText="Intelligence Partner"
        primaryTextColor="text-green-700"
        secondaryTextColor="text-black"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <VerticalCard
          text={{
            title: "Market Analysis Engine",
            desc: "Our advanced AI agents analyze vast market data in milliseconds, identifying opportunities through pattern recognition and predictive modeling. We transform complex market dynamics into clear, actionable trading signals.",
          }}
          style={{
            backgroundColor: "bg-green-600!",
            textColor: "text-white",
          }}
          imgSrc="/images/hyperbabyai4.png"
          imagePosition="bottom"
        />
        <VerticalCard
          text={{
            title: "Smart Trade Execution",
            desc: "Combining the power of multiple AI models, we deliver precise trading insights with minimal latency. Our system monitors markets 24/7, offering traders strategic advantages through timely, data-driven alerts.",
          }}
          style={{
            backgroundColor: "bg-green-100!",
            textColor: "text-black!",
          }}
          imgSrc="/images/hyperbabyai5.png"
          imagePosition="bottom"
        />
      </div>
      <BannerCard
        text={{
          title: "Adaptive Intelligence",
          desc: "Like experienced traders, our AI agents learn and evolve with market conditions. We continuously refine our models through deep learning, ensuring our trading signals remain accurate as markets change.",
        }}
        icon={{
          src: <Brain />,
          iconBg: "bg-green-700!",
          iconColor: "text-white!",
        }}
        imgSrc="/images/hyperbabyai2.png"
        style={{
          backgroundColor: "bg-white!",
          textColor: "text-black",
        }}
      />
    </section>
  );
};

export default FrameworkSection;
