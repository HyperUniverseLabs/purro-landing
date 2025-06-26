import { Separator } from "../ui/separator";

interface MetricCardProps {
  metric: string;
  title: string;
  description: string;
}

const MetricCard = ({ metric, title, description }: MetricCardProps) => {
  return (
    <div className="bg-white/10 text-white py-[41px] px-[24px] md:py-[64px] md:px-[56px] rounded-[28px] md:rounded-[40px] bg-black">
      <span className="text-[44px] md:text-[80px] text-yellow-300 font-semibold leading-[104%] tracking-[-1.28px]">
        {metric}
      </span>
      <Separator className="mt-8 mb-10" />
      <p className="tracking-[-0.09px] text-[18px] font-semibold leading-[144%] mb-2">
        {title}
      </p>
      <p className="text-white/60 tracking-[-0.09px] text-[18px] font-normal leading-[144%]">
        {description}
      </p>
    </div>
  );
};

export default MetricCard;
