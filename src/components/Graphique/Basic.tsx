import { ChevronDown, CirclePlus } from "lucide-react";
import {
  VictoryChart,
  VictoryBar,
  VictoryStack,
  VictoryTheme,
  VictoryAxis,
} from "victory";

export default function Basic() {
  return (
    <div className="flex w-full h-auto flex-1 overflow-x-auto">
      <div className="flex-1 pl-3 bg-white rounded-md mt-0 py-3">
        <div className="">
          {" "}
          {/* Wrapper avec défilement horizontal */}
          <div className="-mb-12">
            <div className="gap-3 flex justify-between mx-6">
              <div className="flex items-center">
                <p className="text-2xl text-slate-700">Engagement Analytics</p>
                <div className="flex gap-4 ml-3">
                  <button className="bg-slate-100 rounded-md p-1.5 text-slate-500 hover:bg-white hover:text-black hover:shadow-xl text-xs">
                    12 Months
                  </button>
                  <button className="bg-slate-100 rounded-md p-1.5 text-slate-500 hover:bg-white hover:text-black hover:shadow-xl text-xs">
                    6 Months
                  </button>
                  <button className="bg-slate-100 rounded-md p-1.5 text-slate-500 hover:bg-white hover:text-black hover:shadow-xl text-xs">
                    30 Days
                  </button>
                  <button className="bg-slate-100 rounded-md p-1.5 text-slate-500 hover:bg-white hover:text-black hover:shadow-xl text-xs">
                    7 Days
                  </button>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex items-center px-3 rounded-md border border-gray-300">
                  <p className="text-slate-500">Social Media</p>
                  <ChevronDown />
                </button>
                <button className="flex items-center px-3 rounded-md border border-gray-300">
                  <p className="text-slate-500">Monthly</p>
                  <ChevronDown />
                </button>
              </div>
            </div>
            <div className="flex mt-4 justify-start mx-6">
              <div>
                <button className="flex items-center px-2 cursor-pointer bg-[#0e9992] p-1 rounded-sm text-white">
                  <CirclePlus className="w-5" />
                  <p className="text-xs ml-1">Add</p>
                </button>
              </div>
              <div className="flex ml-3 items-center justify-between">
                <ul className="flex text-md gap-5">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-950 rounded-full"></div>
                    <p className="m-0 p-0 ml-2">Facebook</p>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#0B8E88] rounded-full"></div>
                    <p className="m-0 p-0 ml-2">Instagram</p>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#a0a0a0] rounded-full"></div>
                    <p className="m-0 p-0 ml-2">Youtube</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <VictoryChart
            domainPadding={{ x: 10 }}
            theme={VictoryTheme.clean}
            style={{ parent: { border: "none" } }}
            height={350}
            width={950}
          >
            <VictoryAxis
              style={{
                axis: { stroke: "none" },
                tickLabels: { fill: "#000", fontSize: 12 },
                grid: { stroke: "none" },
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: { stroke: "none" },
                tickLabels: { fill: "#000", fontSize: 12 },
                grid: { stroke: "none" },
              }}
            />
            <VictoryStack colorScale={["#004646", "#0B8E88", "#8f8f8f"]}>
              <VictoryBar
                aria-label="Facebook Engagement"
                data={[
                  { x: "Jan", y: 25 },
                  { x: "Feb", y: 50 },
                  { x: "Mar", y: 75 },
                  { x: "Apr", y: 40 },
                  { x: "May", y: 60 },
                  { x: "Jun", y: 80 },
                  { x: "Jul", y: 70 },
                  { x: "Aug", y: 50 },
                  { x: "Sep", y: 65 },
                  { x: "Oct", y: 55 },
                  { x: "Nov", y: 45 },
                  { x: "Dec", y: 35 },
                ]}
                style={{
                  data: {
                    stroke: "none",
                    width: 35,
                  },
                }}
              />
              <VictoryBar
                aria-label="Instagram Engagement"
                data={[
                  { x: "Jan", y: 20 },
                  { x: "Feb", y: 40 },
                  { x: "Mar", y: 60 },
                  { x: "Apr", y: 35 },
                  { x: "May", y: 55 },
                  { x: "Jun", y: 75 },
                  { x: "Jul", y: 65 },
                  { x: "Aug", y: 45 },
                  { x: "Sep", y: 60 },
                  { x: "Oct", y: 50 },
                  { x: "Nov", y: 40 },
                  { x: "Dec", y: 30 },
                ]}
                style={{
                  data: {
                    stroke: "none",
                    width: 35,
                  },
                }}
              />
              <VictoryBar
                aria-label="YouTube Engagement"
                data={[
                  { x: "Jan", y: 15 },
                  { x: "Feb", y: 35 },
                  { x: "Mar", y: 55 },
                  { x: "Apr", y: 30 },
                  { x: "May", y: 50 },
                  { x: "Jun", y: 70 },
                  { x: "Jul", y: 60 },
                  { x: "Aug", y: 40 },
                  { x: "Sep", y: 55 },
                  { x: "Oct", y: 45 },
                  { x: "Nov", y: 35 },
                  { x: "Dec", y: 25 },
                ]}
                style={{
                  data: {
                    stroke: "none",
                    width: 35,
                  },
                }}
              />
            </VictoryStack>
          </VictoryChart>
        </div>
      </div>
    </div>
  );
}
