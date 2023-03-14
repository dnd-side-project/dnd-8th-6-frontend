import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ChartDataProps {
  options?: object;
  series: number[];
}

const MainChart = ({ data }: {data: number}) => {
  const [seriesNum, setSeriesNum] = useState<number>(0);

  useEffect(() => {
    seriesNum && setSeriesNum(data);
  }, [seriesNum]);
  
  const [chartData] = useState<ChartDataProps>({
    series: [seriesNum],
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
