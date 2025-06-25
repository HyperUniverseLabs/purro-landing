import { SECTION_ID } from "@/lib/section-id";
import { BannerCard, HeadCard, MetricCard } from "../card";
import { CirclePercent } from "lucide-react";

const MetricSection = () => {
  return (
    <section
      id={SECTION_ID[6]}
      className="min-h-screen container-small space-y-3 pb-[88px]"
    >
      <HeadCard
        primaryText="Dive into Our"
        secondaryText="Expected Performance Metrics"
        primaryTextColor="text-white/60"
        secondaryTextColor="text-white"
        bgColor="bg-black"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <MetricCard
          metric="70%"
          title="Predicted Win Rate"
          description="Our AI models aim to achieve 70% accuracy in trend predictions across major trading pairs."
        />
        <MetricCard
          metric="25K+"
          title="Target Users"
          description="Projected active user base within first 6 months of launch."
        />
        <MetricCard
          metric="$2M+"
          title="Expected Volume"
          description="Anticipated monthly trading volume through our platform."
        />
        <MetricCard
          metric="150%"
          title="Target ROI"
          description="Expected return on investment for active traders using our premium signals."
        />
      </div>
      <BannerCard
        text={{
          title: "Market Potential",
          desc: "Positioned to become a leading AI trading platform on Hyperliquid with cross-chain expansion planned.",
        }}
        style={{
          backgroundColor: "!bg-white/10",
          textColor: "text-white",
        }}
        icon={{
          src: <CirclePercent />,
          iconBg: "!bg-white",
          iconColor: "!text-black",
        }}
        imgSrc="/images/hyperbabyai8.png"
      />
    </section>
  );
};

export default MetricSection;
