import { Settings, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white w-full h-auto px-8 ">
      <div className="flex justify-between py-2 items-center">
        <div className="flex flex-grow justify-center mx-4">
          <input
            type="search"
            placeholder="Type keywords to search"
            className="border p-2 rounded-md w-96"
          />
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-3">
            <img
              src="public/images/profil.jpg"
              alt="photo profil"
              className="w-10 h-10 object-cover rounded-full"
            />
            <p className="text-2xl">Fly Miles</p>
          </div>
          <Bell className="text-[#8f8f8f]" />
          <Settings className="text-[#8f8f8f]" />
        </div>
      </div>
    </header>
  );
}
