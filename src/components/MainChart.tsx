import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Props } from "react-apexcharts";
import ApexOptions from "react-apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartDataProps {
  options?: object;
  series: number[];
}

const MainChart: Props = () => {
  const [chartData, setChartData] = useState<ChartDataProps>({
    series: [30],
    options: {
      chart: {
        height: 232,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "80%",
          },
          dataLabels: {
            name: {
              offsetY: 65,
              color: "white",
              formatter: (val: string) => {
                return `${val} 등급`;
              },
            },
            value: {
              show: true,
              color: "#2B3752",
              offsetY: 75,
              fontSize: "16px",
              formatter: (val: number) => {
                return `${val}점`;
              },
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
    },
  });

  return (
    <div>
      <Chart
          options={chartData.options}
          series={chartData.series}
          type="radialBar"
          height={"350"}
          width={"100%"}
        />
    </div>
  );
};

export default MainChart;