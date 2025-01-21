import { Courbe } from "../Graphique/Courbe";

export default function Google() {
  return (
    <div>
      <div className="px-3 flex-2   w-76 h-auto      bg-white text-slate-600 rounded-md space-y-4 py-3  ">
        <div className="flex justify-between  ">
          <div className="flex items-center">
            <img src="/images/google.png" className="w-10 h-10 mr-2" alt="" />
            <div>
              <p className="text-xs">Ad Name</p>
              <p>GOCA #30</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>

            <p className="m-0 p-0 ml-2">Active</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-4xl font-bold">245k</p>
            <p>Impressions</p>
          </div>
          <div className="flex flex-col justify-between">
            <Courbe />
          </div>
        </div>
      </div>
    </div>
  );
}
