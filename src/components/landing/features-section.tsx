import { SECTION_ID } from "@/lib/section-id";
import { BannerCard, CardWithIcon, HeadCard } from "../card";
import {
  ChartCandlestick,
  ChartNoAxesCombined,
  FileChartPie,
  Radio,
  ShieldPlus,
} from "lucide-react";

const cardData = [
  {
    text: {
      title: "Market Analysis",
      desc: "Make informed decisions with our AI-powered market analysis, delivering real-time insights and trend identification.",
    },
    style: {
      backgroundColor: "bg-white!",
      textColor: "text-black",
    },
    icon: {
      src: <ChartCandlestick />,
      iconBg: "bg-amber-700!",
      iconColor: "text-white!",
    },
  },
  {
    text: {
      title: "Risk Management",
      desc: "Protect your portfolio with intelligent risk assessment tools and automated position sizing recommendations.",
    },
    style: {
      backgroundColor: "bg-white!",
      textColor: "text-black",
    },
    icon: {
      src: <ShieldPlus />,
      iconBg: "bg-amber-700!",
      iconColor: "text-white!",
    },
  },
  {
    text: {
      title: "Trading Signals",
      desc: "Execute with confidence using our AI-generated entry/exit signals and price prediction models.",
    },
    style: {
      backgroundColor: "bg-white!",
      textColor: "text-black",
    },
    icon: {
      src: <Radio />,
      iconBg: "bg-amber-700!",
      iconColor: "text-white!",
    },
  },
  {
    text: {
      title: "Portfolio Analytics",
      desc: "Track and optimize your performance with comprehensive portfolio analysis and advanced reporting tools.",
    },
    style: {
      backgroundColor: "bg-white!",
      textColor: "text-black",
    },
    icon: {
      src: <FileChartPie />,
      iconBg: "bg-amber-700!",
      iconColor: "text-white!",
    },
  },
];

const FeaturesSection = () => {
  return (
    <section
      id={SECTION_ID[3]}
      className="min-h-screen container-small space-y-3 pb-[88px]"
    >
      <HeadCard
        primaryText="AI Trading Intelligence"
        secondaryText="to Master the Markets"
        primaryTextColor="text-amber-700"
        secondaryTextColor="text-black"
        bgColor="bg-amber-200"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cardData.map((card, index) => (
          <CardWithIcon
            key={index}
            text={card.text}
            style={card.style}
            icon={card.icon}
          />
        ))}
      </div>
      <BannerCard
        text={{
          title: "Customizable Strategies",
          desc: "From strategy development to backtesting and live trading, we provide the tools you need to succeed in any market condition. Each service integrates seamlessly with our platform, powered by advanced AI models for maximum effectiveness and reliability.",
        }}
        style={{
          backgroundColor: "bg-black!",
          textColor: "text-white",
        }}
        icon={{
          src: <ChartNoAxesCombined />,
          iconBg: "bg-white!",
          iconColor: "text-black!",
        }}
        imgSrc="/images/hyperbabyai3.png"
      />
    </section>
  );
};

export default FeaturesSection;
