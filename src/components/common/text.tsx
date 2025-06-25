import type { TextProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const H2Text = ({ children, className }: TextProps) => {
  return (
    <div
      className={cn(
        className,
        "text-[28px] md:text-[64px] font-semibold leading-[104%] tracking-[-1.024px]"
      )}
    >
      {children}
    </div>
  );
};

const H3Text = ({ children, className }: TextProps) => {
  return (
    <div
      className={cn(
        className,
        "text-[28px] md:text-[56px] font-semibold leading-[104%] tracking-[-0.896px] mt-0 mb-0"
      )}
    >
      {children}
    </div>
  );
};

const H4Text = ({ children, className }: TextProps) => {
  return (
    <div
      className={cn(
        className,
        "text-[28px] md:text-[44px] font-semibold leading-[104%] tracking-[-0.7px] mt-0 mb-0"
      )}
    >
      {children}
    </div>
  );
};

const H5Text = ({ children, className }: TextProps) => {
  return (
    <div
      className={cn(
        className,
        "text-[24px] md:text-[32px] font-semibold leading-[104%] tracking-[-.384px] md:tracking-[-0.512px] mt-0 mb-0"
      )}
    >
      {children}
    </div>
  );
};

const DescText = ({ children, className }: TextProps) => {
  return (
    <p
      className={cn(
        className,
        "text-xs max-w-[360px] letter-spacing-[-0.06px] text-[12px] leading-[144%]"
      )}
    >
      {children}
    </p>
  );
};

export { H2Text, DescText, H3Text, H4Text, H5Text };
