import ReactEcharts from "echarts-for-react"
import { data } from "../data";

export const Scatter = () => {



  let getColor = []
  let hue = []

  for(let i=0;i<data.length;i++){
    getColor.push(data[i]['Color intensity'])
    hue.push(data[i].Hue)
  }

  let pairData = getColor.map((color, index)=>{
    return [color, hue[index]]
  })

  const option = {
    xAxis: {
      name:"Color Intensity"
    },
    yAxis: {
      name:"Hue"
    },
    series: [
      {
        symbolSize: 10,
        data: pairData,
        type: 'scatter'
      }
    ]
  };
  
  return (
    <>
      <ReactEcharts option={option}/>
    </>
    

    
  )
}
