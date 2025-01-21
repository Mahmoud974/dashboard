import { VictoryPie, VictoryTheme } from "victory";

export default function HalfPie() {
  return (
    <VictoryPie
      theme={VictoryTheme.clean}
      data={[
        { x: "Paid", y: 70 },
        { x: "Direct", y: 30 },
      ]}
      labels={[]}
      cornerRadius={1}
      startAngle={-90}
      endAngle={900} // Finir à l'angle 90 pour ne montrer qu'une moitié
      innerRadius={90} // Cela crée l'effet "anneau" du camembert
      width={400}
      height={400}
      style={{
        data: {
          fill: ({ datum }) => {
            return datum.x === "Paid" ? "#4CAF50" : "#FFFFFF"; // Couleur verte pour "Paid" et blanc pour "Direct"
          },
        },
      }}
    />
  );
}
