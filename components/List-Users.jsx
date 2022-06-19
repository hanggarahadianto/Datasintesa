import React, { useState } from "react";
import Image from "next/image";
function ListUsers({ listOfUsers, loading }) {
  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div>
      {listOfUsers.map((listOfUsers) => {
        return (
          <form key={listOfUsers.id}>
            <div className="px-4 py-2 grid grid-cols-12 hover:bg-blue-100 cursor-pointer rounded-md">
              <div className="col-span-5">
                <div className="flex">
                  <div className="mr-5">
                    <img
                      className="rounded-full"
                      src={listOfUsers.picture.large}
                      alt="image user"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="my-modal-6"
                      className=" modal-button cursor-pointer"
                    >
                      <div className="flex">
                        <p className="font-bold text-gray-700 mr-1">
                          {listOfUsers.name.title}.
                        </p>
                        <p className="font-bold text-gray-700 mr-1">
                          {listOfUsers.name.first}
                        </p>
                        <p className="font-bold text-gray-700">
                          {listOfUsers.name.last}
                        </p>
                      </div>

                      <p> {listOfUsers.email}</p>
                    </label>

                    <input
                      type="checkbox"
                      id="my-modal-6"
                      className="modal-toggle"
                    />
                    <div className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <div className="flex">
                          <h3 className="font-bold text-lg">
                            {listOfUsers.location.street.name}
                          </h3>
                          <h3 className="font-bold text-lg ml-5">
                            {listOfUsers.location.street.number}
                          </h3>
                        </div>
                        <div className="flex">
                          <h3 className="font-bold text-lg">
                            {listOfUsers.location.city}
                          </h3>
                          <h3 className="font-bold text-lg ml-5">
                            {listOfUsers.location.state}
                          </h3>
                          <h3 className="font-bold text-lg ml-5">
                            {listOfUsers.location.country}
                          </h3>
                        </div>

                        <div className="modal-action">
                          <label htmlFor="my-modal-6" className="btn">
                            Close
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <p>{listOfUsers.location.city}</p>
              </div>
              <div className="col-span-3">
                <p>{listOfUsers.dob.date}</p>
              </div>
            </div>
          </form>
        );
      })}
    </div>
  );
}

export default ListUsers;
