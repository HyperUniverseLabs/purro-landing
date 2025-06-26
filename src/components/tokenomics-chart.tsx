"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";

import { Pie, PieChart, Sector, ResponsiveContainer, Cell } from "recharts";

const chartData = [
  {
    name: "Development Fund and Team",
    value: 9,
  },
  {
    name: "Community Airdrops",
    value: 2.5,
  },
  {
    name: "Presale on Hypurr",
    value: 88.5,
  },
];
const chartConfig: ChartConfig = {
  value: {
    label: "Percentage",
  },
  "Development Fund and Team": {
    label: "Development Fund and Team",
    color: "hsl(182, 84%, 22%)",
  },
  "Community Airdrops": {
    label: "Community Airdrops",
    color: "hsl(176, 84%, 36%)",
  },
  "Presale on Hypurr": {
    label: "Presale on Hypurr",
    color: "hsl(176, 78%, 51%)",
  },
};
const COLORS = [
  "#8B7E00", // Dark gold
  "#B79F00", // Medium gold
  "#FFD700", // Bright gold
];

const TokenomicsChart = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
      props as {
        cx: number;
        cy: number;
        innerRadius: number;
        outerRadius: number;
        startAngle: number;
        endAngle: number;
        fill: string;
      };
    return (
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    );
  };

  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props as {
      cx: number;
      cy: number;
      midAngle: number;
      innerRadius: number;
      outerRadius: number;
      percent: number;
    };
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="text-xs sm:text-sm md:text-base font-medium"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent />} />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="70%"
            paddingAngle={5}
            activeIndex={activeIndex}
            onMouseEnter={onPieEnter}
            activeShape={renderActiveShape}
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default TokenomicsChart;
