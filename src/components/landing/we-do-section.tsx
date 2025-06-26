import { DescText } from "../common/text";
import {
  BannerCard,
  HeadCard,
  TechnologyPartnerCard,
  VerticalCard,
} from "../card";
import { SECTION_ID } from "@/lib/section-id";
import { Rocket } from "lucide-react";

const WeDoSection = () => {
  return (
    <section
      id={SECTION_ID[2]}
      className="min-h-screen container-small space-y-3 pb-[88px]"
    >
      <HeadCard
        primaryText="Trading should make you money"
        secondaryText="otherwise, what’s the fun?"
        primaryTextColor="text-violet-700"
        bgColor="bg-violet-200"
        secondaryTextColor="text-black"
      >
        <DescText>
          Most wallets just hold your funds. Purro puts them to work. Every time
          you trade with Purro, 50% of the fees automatically go into staking –
          and the yield comes back to your wallet.
        </DescText>
      </HeadCard>
      <BannerCard
        style={{
          backgroundColor: "bg-black",
          textColor: "text-white",
        }}
        text={{
          title: "Grind less, earn more.",
          desc: "That’s the Purro way.",
        }}
        icon={{
          src: <Rocket />,
          iconColor: "text-white",
          iconBg: "bg-white",
        }}
        imgSrc="/images/hyperbabyai1.png"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <VerticalCard
          style={{
            backgroundColor: "bg-violet-500!",
            textColor: "text-white",
          }}
          text={{
            title: "Leading the AI Trading Evolution",
            desc: "Combining advanced AI models with real-time market data, we're revolutionizing how traders analyze and execute in cryptocurrency markets. Our platform seamlessly integrates predictive analytics, risk management, and automated trading strategies.",
          }}
          imgSrc="/images/hyperbabyai7.png"
        />
        <VerticalCard
          style={{
            backgroundColor: "bg-violet-100!",
            textColor: "text-black!",
          }}
          text={{
            title: "Pioneering the Future of Trading",
            desc: "At HyperbabyAI, we're building the next generation of crypto trading tools. Our platform combines cutting-edge AI with robust market analysis, empowering traders with intelligent insights and automated strategies for success in digital asset markets.",
          }}
          imgSrc="/images/hyperbabyai6.png"
        />
      </div>
      <TechnologyPartnerCard />
    </section>
  );
};

export default WeDoSection;
