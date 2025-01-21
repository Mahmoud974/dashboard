export default function Traffic() {
  return (
    <div className="flex-1  justify-center">
      <div className="h-full pl-3 bg-white rounded-md space-y-4 mt-0 py-3">
        <div className="flex mx-2 justify-between items-center">
          <p className="text-2xl">Traffic Effectives</p>
          <button className="px-4 cursor-pointer flex items-center justify-center bg-white text-slate-200 border-2 font-semibold rounded-md transition duration-200">
            ...
          </button>
        </div>

        <div className="flex items-center justify-between">
          <ul className="flex text-md gap-5">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-950 rounded-full"></div>
              <p className="m-0 p-0 ml-2">Paid</p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <p className="m-0 p-0 ml-2">Direct</p>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
              <p className="m-0 p-0 ml-2">Organic</p>
            </li>
          </ul>
        </div>

        <div className="flex justify-center -pt-12  ">
          <div
            className="radial-progress"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            70%
          </div>
          <div
            className="radial-progress"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            70%
          </div>
          <div
            className="radial-progress"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            70%
          </div>
        </div>
      </div>
    </div>
  );
}
