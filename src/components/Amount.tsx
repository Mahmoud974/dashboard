export default function Amount() {
  return (
    <div className="flex-1  justify-center">
      <div className="h-full pl-3 bg-white rounded-md  mt-0 py-3">
        <div>
          <div className="flex mx-2 justify-between items-center">
            <p className="text-2xl">Total Order</p>
            <span className="bg-green-500 px-2 text-xs rounded-full font-semibold text-green-800 cursor-pointer flex items-center justify-center   ">
              + 12.4%
            </span>
          </div>
          <p className=" ml-2">Orders vs last month</p>
        </div>

        <div className="flex items-center justify-between"></div>

        <div className=" mt-12 text-5xl ">
          <p>34.760$</p>
        </div>
      </div>
    </div>
  );
}
