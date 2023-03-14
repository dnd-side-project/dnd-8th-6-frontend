import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

interface ChartDataProps {
  options?: object;
  series?: object[] | any;
}

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const GithubYearChart = ({ data }: { data: number[] }) => {
  const [seriesArr, setSeriesArr] = useState<number[]>([]);
  
  useEffect(() => {
    seriesArr && setSeriesArr(data);
  }, [seriesArr]);
  
  const [chartData, _] = useState<ChartDataProps>({
    series: [
      {
        data: seriesArr,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 3,
          columnWidth: "40%",
          colors: {
            backgroundBarColors: ["#2B3752"],
            backgroundBarRadius: 4,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      labels: {
        show: true,
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: ["#00D238", "#365FFF"],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      xaxis: {
        show: false,
        axisTicks: {
          show: false,
        },
        categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        labels: {
          style: {
            colors: "#ffffff",
            fontSize: "14px",
          },
        },
      },
      yaxis: {
        show: false,
      },
    },
  });

  return (
    <div className="flex items-center shrink-0 w-full h-full bg-tertiary-700 text-neutral-0 rounded-2xl">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={"150"}
        width={"100%"}
        className="mr-2"
      />
    </div>
  );
};

export default GithubYearChart;
