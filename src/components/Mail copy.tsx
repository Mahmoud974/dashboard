import { Pie } from "./Graphique/Pie";

export default function Mail() {
  return (
    <div className=" w-auto  h-auto justify-center ">
      <div className=" pl-3 bg-white rounded-md space-y-4 mt-0 py-3">
        <div className="flex mx-3 justify-between items-center">
          <p className="text-2xl ">Mail Static</p>
          <button className="px-4   cursor-pointer flex items-center justify-center bg-white text-slate-200 border-2 font-semibold rounded-md transition duration-200">
            ...
          </button>
        </div>

        <div className="flex items-center  pt-0 gap-8  ">
          <Pie />
          <ul className="flex  flex-col text-md space-y-2  ">
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
                <p className="m-0 p-0 font-thin text-xs">128 Mails</p>
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
