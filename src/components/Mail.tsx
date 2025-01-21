import { Pie } from "./Graphique/Pie";

export default function Mail() {
  return (
    <div className="flex-1 justify-center">
      <div className="h-full pl-3 bg-white rounded-md space-y-4 mt-0 py-3">
        <div className="flex mx-2 justify-between items-center">
          <p className="text-2xl">Mail Statistic</p>
          <div className="bg-orange-600 px-2 text-xs rounded-full font-semibold text-orange-900 cursor-pointer flex items-center justify-center   ">
            <p>+300</p>
          </div>
        </div>
        <div className="flex items-center justify-start  pt-0 gap-8  ">
          <Pie />
          <ul className="flex text-xl ml-6  flex-col text-md space-y-2  ">
            <li className="flex items-center ">
              <div className="ml-2">
                <div className="m-0 p-0 flex items-center">
                  <div className="w-2 h-2 bg-green-950 rounded-full"></div>
                  <p className="ml-1">Sent</p>
                </div>
                <p className="m-0 p-0 font-thin text-xs">128 Mails</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="ml-2">
                <div className="m-0 p-0 flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <p className="ml-1 ">Pending</p>
                </div>
                <p className="m-0 p-0 font-thin text-xs">28 Mails</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="ml-2">
                <div className="m-0 p-0 flex items-center">
                  <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
                  <p className="ml-1">Cancel</p>
                </div>
                <p className="m-0 p-0 font-thin text-xs">128 Mails</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
