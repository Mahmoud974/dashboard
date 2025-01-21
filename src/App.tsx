import { Menu } from "lucide-react";
import Amount from "./components/Amount";
import Campaign from "./components/Campaign";
import Basic from "./components/Graphique/Basic";
import Table from "./components/Graphique/Table";
import Header from "./components/Header";
import Mail from "./components/Mail";
import Media from "./components/Media/Media";
import SideBar from "./components/SideBar";
import Traffic from "./components/Traffic";

export default function App() {
  return (
    <main className="flex flex-col md:flex-row ">
      <Menu className="flex md:hidden cursor-pointer gap-8" />
      <SideBar />
      <section className="flex flex-col mx-6 md:mx-0  ">
        <div className="hidden md:flex cursor-pointer">
          <Header />
        </div>
        <div className="flex flex-col  md:mx-12     mt-6">
          <h2 className="text-3xl pb-5   text-gray-700 md:text-left text-center">
            Welcome back Moussa
          </h2>

          <div className="mt-4  ">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex space-y-5 flex-col flex-2">
                <Campaign />
                <Media />
              </div>
              <div className="flex space-y-5 flex-col flex-3">
                <div className=" flex md:flex-row flex-col md:space-y-0 space-y-5  md:container md:gap-5 md:justify-between mx-auto">
                  <Amount />
                  <Mail />
                  <Traffic />
                </div>
                <div className="flex flex-col  w-full ">
                  <Basic />
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
