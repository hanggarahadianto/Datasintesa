import React from "react";

const PaginationUser = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="flex justify-center mt-8">
      <ul className="flex">
        {pageNumber.map((number) => (
          <li className="mr-5 btn-group" key={number}>
            <a
              onClick={() => paginate(number)}
              className="bg-blue-100 hover:bg-blue-200 w-6 rounded-lg cursor-pointer text-xl text-center"
              // href="!#"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaginationUser;
