import type { CardProps } from "@/lib/types";
import { H4Text } from "../common";
import CardDescription from "./card-description";
import { cn } from "@/lib/utils";

const VerticalCard = ({
  style,
  text,
  imgSrc,
  imagePosition = "top",
}: CardProps & { imagePosition?: "top" | "bottom" }) => {
  return (
    <div
      className={cn(
        style?.backgroundColor,
        style?.textColor,
        "py-[41px] px-[24px] md:py-[64px] md:px-[56px] rounded-[28px] md:rounded-[40px] bg-black text-white space-y-10"
      )}
    >
      {imagePosition === "top" && imgSrc && (
        <img
          src={imgSrc}
          alt="banner icon"
          width={200}
          height={200}
          className="w-full h-[200px] object-contain"
        />
      )}
      <div className="space-y-4">
        <H4Text>{text.title}</H4Text>
        <CardDescription>{text.desc}</CardDescription>
      </div>
      {imagePosition === "bottom" && imgSrc && (
        <img
          src={imgSrc}
          alt="banner icon"
          width={200}
          height={200}
          className="w-full h-[200px] object-contain"
        />
      )}
    </div>
  );
};

export default VerticalCard;
