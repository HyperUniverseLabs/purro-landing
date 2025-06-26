import React from "react";
import { clsx } from "clsx";

type ClassValue = string | number | null | undefined | boolean;

export type CardProps = {
  style?: {
    backgroundColor: ClassValue;
    textColor: ClassValue;
  };
  icon?: {
    src: React.ReactNode;
    iconColor: string;
    iconBg: string;
  };
  text: {
    title: string;
    desc: React.ReactNode;
    className?: string;
  };
  imgSrc?: string;
  children?: React.ReactNode;
};

export type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export interface TextProps {
  children: React.ReactNode;
  className?: string;
}
