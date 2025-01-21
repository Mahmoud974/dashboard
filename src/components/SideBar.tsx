import {
  BadgeInfo,
  Bell,
  CreditCard,
  Flag,
  Layers,
  LayoutDashboard,
  LogOut,
  Megaphone,
  MessageCircleMore,
  Settings,
  ShieldCheck,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Megaphone, label: "Ads" },
  { icon: ShieldCheck, label: "Security" },
  { icon: Layers, label: "Platforms" },
  { icon: Bell, label: "Notifications" },
  { icon: MessageCircleMore, label: "Chat" },
  { icon: CreditCard, label: "Cards" },
  { icon: Flag, label: "Reports" },
];

const bottomItems = [
  { icon: Settings, label: "Settings" },
  { icon: BadgeInfo, label: "Help Center" },
  { icon: LogOut, label: "Logout" },
];

const MenuItem = ({ icon: Icon, label }) => (
  <li className="flex pl-9 hover:bg-[#0B8E88] hover:text-[#072B2B]   transition-colors duration-300 p-2 rounded-md cursor-pointer">
    <Icon className="text-[#0B8E88] hover:text-[#072B2B]" />
    <p className="ml-2">{label}</p>
  </li>
);

export default function SideBar() {
  return (
    <div className="bg-[#072B2B] h-auto w-[30rem] text-white relative md:flex hidden flex-col">
      <img
        src="public/images/logo.png"
        alt="Logo"
        className="pl-6 w-52 ml-2 mt-5"
      />
      <ul className="space-y-5 pt-14">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
      <ul className="space-y-5 pt-14 absolute bottom-0 w-full">
        {bottomItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}
