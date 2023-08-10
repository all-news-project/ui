import React from "react";
import { XYPlot, XAxis, YAxis, VerticalRectSeries } from "react-vis";

const Websites = ({ labels, values }) => {
  console.log(labels);
  console.log(values);
  const columnWidth = 0.6;

  const transformDataToRectSeries = (raw) => {
    const transformed = raw.map((el, i) => {
      el.x0 = i + 1 - columnWidth / 2;
      el.x = i + 1 + columnWidth / 2;
      return el;
    });
    transformed.unshift({ x: 0.5, y: 0 }); // fake data point, enables margin between y-axis and first column
    transformed.push({ x: 3.5, y: 0 }); // fake data point, enables margin between last column and chart end
    return transformed;
  };
  const increment = (el, index, array) => {
    return el + 1;
  };

  return (
    <section className="card">
      <h3>Websites</h3>
      <h4>amount of collected article in specific domain</h4>
      <XYPlot width={800} height={300}>
        <XAxis
          tickFormat={(v, i) => labels[i]}
          tickValues={[...Array(labels.length).keys()].map(increment)}
          tickTotal={1}
          tickLabelAngle={30}
          tickSize={1}
          marginTop={40}
          style={{
            text: {
              stroke: "none",
              fill: "#000000",
              fontSize: 14,
              fontWeight: 400,
            },
          }}
        />
        <YAxis />
        <VerticalRectSeries data={transformDataToRectSeries(values)} />
      </XYPlot>
    </section>
  );
};

export default Websites;
