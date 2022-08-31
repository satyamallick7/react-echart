import React from "react";
import ReactEcharts from "echarts-for-react";
import { data } from "../data";

export const BarChart = () => {

  const category1 = data.filter((item) => item.Alcohol == 1);
  const category2 = data.filter((item) => item.Alcohol == 2);
  const category3 = data.filter((item) => item.Alcohol == 3);

  const malic1 = [];
  for (let i = 0; i < category1.length; i++) {
    malic1.push(category1[i]["Malic Acid"]);
  }
    const avgMalic1 = malic1.reduce((a,b)=> a+b, 0) /malic1.length

    const malic2 = [];
  for (let i = 0; i < category1.length; i++) {
    malic2.push(category2[i]["Malic Acid"]);
  }
    const avgMalic2 = malic2.reduce((a,b)=> a+b, 0) /malic2.length


    const malic3 = [];
  for (let i = 0; i < category3.length; i++) {
    malic3.push(category3[i]["Malic Acid"]);
  }
    const avgMalic3 = malic3.reduce((a,b)=> a+b, 0) /malic3.length

  const avgMalicAcid = [avgMalic1, avgMalic2, avgMalic3]

  console.log(avgMalicAcid)

  



  const option = {
    xAxis: {
      type: "category",
      data: [1, 2, 3],
      name: "Alcohol",
    },
    yAxis: {
      type: "value",
      name: "Malic Acid",
    },
    series: [
      {
        data: avgMalicAcid,
        type: "bar",
      },
    ],
  };

  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  );
};
