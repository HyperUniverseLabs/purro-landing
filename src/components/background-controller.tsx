"use client";

import { SECTION_ID } from "@/lib/section-id";
import { useEffect, useState } from "react";

type BackgroundControllerProps = {
  children: React.ReactNode;
};

export const BackgroundController = ({
  children,
}: BackgroundControllerProps) => {
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getBackgroundColor = (sectionId: string) => {
    switch (sectionId) {
      case SECTION_ID[1]:
        return "bg-black";
      case SECTION_ID[2]:
        return "bg-violet-200";
      case SECTION_ID[3]:
        return "bg-amber-200";
      case SECTION_ID[4]:
        return "bg-green-200";
      case SECTION_ID[5]:
        return "bg-black";
      default:
        return "bg-black";
    }
  };

  return (
    <div
      className={`min-h-screen w-full ${getBackgroundColor(
        activeSection
      )} transition-colors duration-1000`}
    >
      {children}
    </div>
  );
};
