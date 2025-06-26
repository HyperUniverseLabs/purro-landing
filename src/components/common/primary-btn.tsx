import { cn } from "@/lib/utils";
import React from "react";

interface PrimaryBtnProps {
  children: React.ReactNode;
  className?: string;
}

const PrimaryBtn = ({ children, className }: PrimaryBtnProps) => {
  return (
    <button
      className={cn(
        className,
        "font-body py-[18px] px-[32px] text-lg leading-[144%] tracking-[-0.14px] border border-white/10 bg-primary w-fit rounded-full hover:scale-95 hover:bg-primary/80 transition-all font-semibold"
      )}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
