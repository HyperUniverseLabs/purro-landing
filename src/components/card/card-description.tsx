import type { TextProps } from "@/lib/types";
import React from "react";

const CardDescription = ({ children }: TextProps) => {
  return (
    <div className="text-lg font-normal leading-[144%] tracking-[-0.09px]">
      {children}
    </div>
  );
};

export default CardDescription;
