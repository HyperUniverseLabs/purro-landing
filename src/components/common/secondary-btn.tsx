import { cn } from "@/lib/utils";
import React from "react";

interface CustomBtnProps {
  className?: string;
  children: React.ReactNode;
}

const SecondaryBtn = ({ children, className }: CustomBtnProps) => {
  return (
    <button
      className={cn(
        className,
        "font-body py-[12px] px-[22px] text-sm leading-[144%] tracking-[-0.14px] border border-white/10 bg-white/5 w-fit rounded-full hover:scale-95 hover:bg-white/15 transition-all"
      )}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
