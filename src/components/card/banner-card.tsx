import type { CardProps } from "@/lib/types";
import React from "react";
import { H3Text } from "../common";
import CardDescription from "./card-description";
import { cn } from "@/lib/utils";

const BannerCard = ({ style, text, icon, imgSrc, children }: CardProps) => {
  return (
    <div
      className={cn(
        style?.backgroundColor,
        style?.textColor,
        "py-[41px] px-[24px] md:py-[64px] md:px-[56px] rounded-[28px] md:rounded-[40px] bg-black"
      )}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-[40px]">
        <div className={cn(imgSrc && "md:w-[70%]", "space-y-6")}>
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
          <H3Text>{text.title}</H3Text>
          <CardDescription className="text-lg font-normal leading-[144%] tracking-[-0.09px]">
            {text.desc}
          </CardDescription>
        </div>
        {imgSrc && (
          <div className="md:w-[30%] items-center flex justify-center">
            <img
              src={imgSrc}
              alt="banner icon"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default BannerCard;
