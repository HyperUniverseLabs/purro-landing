import type { CardProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import CardDescription from "./card-description";
import { H5Text } from "../common";

const CardWithIcon = ({ style, text, icon }: CardProps) => {
  return (
    <div
      className={cn(
        style?.backgroundColor,
        style?.textColor,
        "py-[41px] px-[24px] md:py-[64px] md:px-[56px] rounded-[28px] md:rounded-[40px] bg-black"
      )}
    >
      <div className="space-y-6">
        {icon && (
          <div
            className={cn(
              icon.iconBg,
              icon.iconColor,
              "bg-white w-fit p-4 rounded-full text-black"
            )}
          >
            {icon.src}
          </div>
        )}
        <div className="space-y-3">
          <H5Text>{text.title}</H5Text>
          <CardDescription className="text-lg font-normal leading-[144%] tracking-[-0.09px]">
            {text.desc}
          </CardDescription>
        </div>
      </div>
    </div>
  );
};

export default CardWithIcon;
