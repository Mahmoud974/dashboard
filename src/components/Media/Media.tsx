import Facebook from "./Facebook";
import Google from "./Google";
import Premium from "./Premium";
import Youtube from "./Youtube";

export default function Media() {
  return (
    <div className="space-y-5 ">
      <Facebook />
      <Google />
      <Youtube />
      <Premium />
    </div>
  );
}
