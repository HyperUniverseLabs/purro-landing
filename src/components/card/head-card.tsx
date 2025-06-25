import React from "react";
import { H2Text } from "../common";
import { cn } from "@/lib/utils";

interface HeadCardProps {
  primaryText: string;
  primaryTextColor: string;
  secondaryText: string;
  secondaryTextColor: string;
  bgColor: string;
  children?: React.ReactNode;
}

const HeadCard = ({
  children,
  primaryText,
  primaryTextColor,
  secondaryText,
  secondaryTextColor,
  bgColor,
}: HeadCardProps) => {
  return (
    <div
      className={cn(
        secondaryTextColor,
        bgColor,
        "rounded-[40px] py-[56px] px-[24px] md:py-[104px] md:px-[104px] space-y-4"
      )}
    >
      <H2Text>
        <span className={primaryTextColor}>{primaryText}</span> {secondaryText}
      </H2Text>
      {children && children}
    </div>
  );
};

export default HeadCard;
