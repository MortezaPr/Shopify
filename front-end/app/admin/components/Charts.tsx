import { ResponsivePie } from "@nivo/pie";
import { ResponsiveLine } from "@nivo/line";

const mydata = [
  {
    id: "lisp",
    label: "lisp",
    value: 25,
    color: "hsl(312, 70%, 50%)",
  },
  {
    id: "ruby",
    label: "ruby",
    value: 211,
    color: "hsl(186, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 328,
    color: "hsl(90, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 586,
    color: "hsl(320, 70%, 50%)",
  },
  {
    id: "hack",
    label: "hack",
    value: 506,
    color: "hsl(2, 70%, 50%)",
  },
];

// you'll often use just a few of them.
export const MyResponsivePie = ({ textColor }) => (
  <ResponsivePie
    data={mydata}
    margin={{ top: 50, right: 58, bottom: 50, left: 58 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    colors={{ scheme: "nivo" }}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor={textColor}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    enableArcLabels={false}
    arcLabelsSkipAngle={10}
  />
);

const newData = [
  {
    id: "japan",
    color: "hsl(81, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 216,
      },
      {
        x: "helicopter",
        y: 111,
      },
      {
        x: "boat",
        y: 175,
      },
      {
        x: "train",
        y: 41,
      },
      {
        x: "subway",
        y: 125,
      },
      {
        x: "bus",
        y: 206,
      },
      {
        x: "car",
        y: 176,
      },
      {
        x: "moto",
        y: 120,
      },
      {
        x: "bicycle",
        y: 153,
      },
      {
        x: "horse",
        y: 189,
      },
      {
        x: "skateboard",
        y: 215,
      },
      {
        x: "others",
        y: 83,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(158, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 144,
      },
      {
        x: "helicopter",
        y: 245,
      },
      {
        x: "boat",
        y: 200,
      },
      {
        x: "train",
        y: 8,
      },
      {
        x: "subway",
        y: 187,
      },
      {
        x: "bus",
        y: 267,
      },
      {
        x: "car",
        y: 151,
      },
      {
        x: "moto",
        y: 165,
      },
      {
        x: "bicycle",
        y: 13,
      },
      {
        x: "horse",
        y: 26,
      },
      {
        x: "skateboard",
        y: 41,
      },
      {
        x: "others",
        y: 149,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(170, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 24,
      },
      {
        x: "helicopter",
        y: 55,
      },
      {
        x: "boat",
        y: 239,
      },
      {
        x: "train",
        y: 136,
      },
      {
        x: "subway",
        y: 3,
      },
      {
        x: "bus",
        y: 249,
      },
      {
        x: "car",
        y: 176,
      },
      {
        x: "moto",
        y: 298,
      },
      {
        x: "bicycle",
        y: 50,
      },
      {
        x: "horse",
        y: 225,
      },
      {
        x: "skateboard",
        y: 26,
      },
      {
        x: "others",
        y: 195,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(279, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 58,
      },
      {
        x: "helicopter",
        y: 293,
      },
      {
        x: "boat",
        y: 173,
      },
      {
        x: "train",
        y: 236,
      },
      {
        x: "subway",
        y: 151,
      },
      {
        x: "bus",
        y: 238,
      },
      {
        x: "car",
        y: 110,
      },
      {
        x: "moto",
        y: 243,
      },
      {
        x: "bicycle",
        y: 25,
      },
      {
        x: "horse",
        y: 83,
      },
      {
        x: "skateboard",
        y: 97,
      },
      {
        x: "others",
        y: 65,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(256, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 284,
      },
      {
        x: "helicopter",
        y: 245,
      },
      {
        x: "boat",
        y: 11,
      },
      {
        x: "train",
        y: 25,
      },
      {
        x: "subway",
        y: 254,
      },
      {
        x: "bus",
        y: 137,
      },
      {
        x: "car",
        y: 281,
      },
      {
        x: "moto",
        y: 281,
      },
      {
        x: "bicycle",
        y: 112,
      },
      {
        x: "horse",
        y: 265,
      },
      {
        x: "skateboard",
        y: 38,
      },
      {
        x: "others",
        y: 147,
      },
    ],
  },
];

export const MyResponsiveLine = ({ textColor }) => (
  <ResponsiveLine
    data={newData}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
