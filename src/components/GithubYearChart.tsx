import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

interface ChartDataProps {
  options?: object;
  series?: object[] | any;
}

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const GithubYearChart = ({ data }: { data: number[] }) => {
  const [seriesArr, setSeriesArr] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    seriesArr && setSeriesArr(data);
    categories && setCategories(getCategories());
  }, [seriesArr]);

  const getCategories = () => {
    const todayMonth = new Date().getMonth() + 1;
    const categories = [];
    let temp;
    for (let i = 0; i < 12; i++) {
      if (todayMonth + i <= 12) {
        temp = todayMonth + i;
      } else {
        temp = todayMonth + i - 12;
      }
      categories[i] = temp.toString();
    }
    return categories;
  };
  
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
        categories: categories,
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
