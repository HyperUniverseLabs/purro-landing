import { Gem } from "lucide-react";
import { H3Text } from "../common";
import { Separator } from "../ui/separator";

const imageList = [
  {
    src: "/hyperliquid_logo.svg",
    alt: "Hyperliquid Logo",
    link: "https://hyperfoundation.org/",
  },
  {
    src: "/privy-logo-light.png",
    alt: "Privy Logo",
    link: "https://www.privy.io/",
  },
  {
    src: "/langchain-logo.png",
    alt: "Langchain Logo",
    link: "https://langchain.com",
  },
  {
    src: "/ai-sweet-shop-logo.svg",
    alt: "AI Sweet Shop Logo",
    link: "https://aisweat.shop/",
  },
];

const TechnologyPartnerCard = () => {
  return (
    <div className="py-[41px] px-[24px] md:py-[64px] md:px-[56px] rounded-[28px] md:rounded-[40px] bg-white text-black">
      <div className="space-y-6 mb-10 md:mb-14">
        <div className="w-fit p-4 rounded-full text-white bg-violet-500">
          <Gem />
        </div>
        <H3Text>Built With Leading Technology</H3Text>
      </div>
      <Separator />
      <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        {imageList.map((image, index) => (
          <a
            href={image.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={150}
              height={150}
              className="w-[150px] h-auto object-fill"
            />
          </a>
        ))}
      </div>
      <Separator className="hidden md:block" />
    </div>
  );
};

export default TechnologyPartnerCard;
