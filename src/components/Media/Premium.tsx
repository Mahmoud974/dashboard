export default function Premium() {
  return (
    <div>
      <div
        className="px-3 flex-2 py-12 text-center w-76 h-auto text-white space-y-4 rounded-xl relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(to bottom, #016666, #001c1c)", // Dégradé vert
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="flex justify-between text-3xl font-bold">
          Get a Premium Account
        </p>
        <button className="px-5 py-2 bg-[#fefefe] text-[#016666] box-shadow cursor-pointer font-bold rounded-full">
          Get Now
        </button>

        <div className="absolute top-0 left-0 w-full h-full  "></div>
      </div>
    </div>
  );
}
