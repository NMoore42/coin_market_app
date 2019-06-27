import React from 'react';
import "../App.css"
import "../../node_modules/react-vis/dist/style.css"
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, ChartLabel} from "react-vis"

export default function CoinChartCard() {
  const data = [
      {x: 0, y: 9690},
      {x: 1, y: 10478},
      {x: 2, y: 10122},
      {x: 3, y: 11043},
      {x: 4, y: 10079},
      {x: 5, y: 11879},
      {x: 6, y: 12789}
    ]

    return(
      <div style={{justifyContent:'center'}} className="Bar">
        <XYPlot height={250} width={1180}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickTotal={7} title="Day" />
          <YAxis title="Price (USD)"/>
          <ChartLabel
            className="alt-x-label"
            includeMargin={true}
            xPercent={0.5}
            yPercent={.03}
          />
          <LineSeries data={data} />
        </XYPlot>
      </div>
    )
}
