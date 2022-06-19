import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import ListUsers from "./List-Users";
import PaginationUser from "./PaginationUser";

function User() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const loadUsersData = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://randomuser.me/api/?page=1&results=10"
      );
      setListOfUsers(res.data.results);
      setLoading(false);
    };
    loadUsersData();
  }, []);

  console.log(listOfUsers);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = listOfUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="px-8 py-4 mt-10 bg-white">
      <p className="text-3xl font-bold mb-5 text-gray-700">All Users</p>
      <p className="mb-10">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
      <div>
        <form className="flex">
          <input
            className="px-6 py-2 bg-gray-200 rounded-lg w-96 mb-5 ml-4 border-none outline-0"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="px-4 py-2 grid grid-cols-12 mb-5">
        <div className=" col-span-5">
          <p className="font-bold text-xl">Name</p>
        </div>
        <div className="col-span-3">
          <p className="font-bold text-xl">City</p>
        </div>
        <div className="text-xl font-bold col-span-3">
          <p className="font-bold text-xl">Date of Birth</p>
        </div>
      </div>
      <div>
        <ListUsers listOfUsers={currentUsers} loading={loading} />
      </div>
      <div>
        <PaginationUser
          usersPerPage={usersPerPage}
          totalUsers={listOfUsers.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default User;

{
  /* </label> */
}
{
  /* <input
                      type="checkbox"
                      id="my-modal-3"
                      class="modal-toggle"
                    /> */
}
{
}
