import Navbar from "../components/Navbar";
import User from "../components/User";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <Navbar />
      </div>
      <div className="col-span-9 bg-white">
        <User />
      </div>
    </div>
  );
}
