export default function Campaign() {
  return (
    <div className="px-3  flex-2 bg-[#016666] text-white rounded-md space-y-4 py-3  ">
      <p className="text-2xl">Compaign overview</p>
      <div className="flex justify-between  ">
        <div className="flex items-center">
          <p className="text-6xl font-thin text-yellow-400"> 65</p>
          <p className="text-md ml-2">
            Active
            <br />
            Compaign
          </p>
        </div>
        <ul className="flex items-center justify-between gap-3  ">
          <li className="bg-white rounded-full p-1">
            <img
              src="/images/facebook.png"
              className="w-7 h-7 cursor-pointer  "
              alt=""
            />
          </li>
          <li className="bg-white rounded-full p-1">
            <img
              src="/images/google.png"
              className="w-7 h-7 cursor-pointer "
              alt=""
            />
          </li>
          <li className="bg-white rounded-full p-1">
            <img
              src="/images/youtube.png"
              className="w-7 h-7 cursor-pointer "
              alt=""
            />
          </li>
        </ul>
      </div>
      <ul className="flex justify-center text-center gap-12   text-md">
        <li>
          <p className="font-thin">
            <span className="font-bold">12</span> Pending
          </p>
        </li>
        <li>
          <p className="font-thin">
            <span className="font-bold">12</span> Cancel
          </p>
        </li>
        <li>
          <p className="font-thin">
            <span className="font-bold">75%</span> Success
          </p>
        </li>
      </ul>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search Compaign"
        className="w-full rounded-md py-1 text-black"
      />
    </div>
  );
}
