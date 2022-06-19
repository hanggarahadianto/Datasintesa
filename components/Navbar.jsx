import React from "react";
import {
  PersonFill,
  BellFill,
  PencilFill,
  GearFill,
  Info,
} from "react-bootstrap-icons";
function Navbar() {
  return (
    <div className="bg-blue-100 h-full">
      <div className="px-4 py-2 text-blue-400 ml-20">
        <div className="mt-10 text-xl font-bold">
          <p>Your Account</p>
        </div>
        <div className="mt-10 gap space-y-8 font-semibold ">
          <div className="flex cursor-pointer hover:font-bold">
            <PersonFill className=" mr-3 h-7 w-7 " />
            <p className="text-xl">User</p>
          </div>
          <div className="flex first-letter:cursor-pointer hover:font-bold">
            <BellFill className=" mr-3 h-7 w-7 " />
            <p className="text-xl">Notification</p>
          </div>
          <div className="flex cursor-pointer hover:font-bold">
            <PencilFill className=" mr-3 h-7 w-7 " />

            <p className="text-xl">Edit Profile</p>
          </div>
          <div className="flex cursor-pointer hover:font-bold">
            <GearFill className=" mr-3 h-7 w-7 " />

            <p className="text-xl">Setting</p>
          </div>
          <div className="flex cursor-pointer hover:font-bold">
            <Info className=" mr-3 h-7 w-7 " />

            <p className="text-xl">Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
