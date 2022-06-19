import React, { useState } from "react";

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
                      src={listOfUsers.picture.thumbnail}
                    ></img>
                  </div>
                  <div>
                    <label
                      for="my-modal-6"
                      class=" modal-button cursor-pointer"
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
                      class="modal-toggle"
                    />
                    <div class="modal modal-bottom sm:modal-middle">
                      <div class="modal-box">
                        <div className="flex">
                          <h3 class="font-bold text-lg">
                            {listOfUsers.location.street.name}
                          </h3>
                          <h3 class="font-bold text-lg ml-5">
                            {listOfUsers.location.street.number}
                          </h3>
                        </div>
                        <div className="flex">
                          <h3 class="font-bold text-lg">
                            {listOfUsers.location.city}
                          </h3>
                          <h3 class="font-bold text-lg ml-5">
                            {listOfUsers.location.state}
                          </h3>
                          <h3 class="font-bold text-lg ml-5">
                            {listOfUsers.location.country}
                          </h3>
                        </div>

                        <div class="modal-action">
                          <label for="my-modal-6" class="btn">
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
