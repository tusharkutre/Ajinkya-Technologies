import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const UserDataCard = ({ user, handleDeleteUser, handleEdit }) => {
  console.log("from user data card", user);
  return (
    <>
      <div className="bg-gray-200 p-4 shadow-lg hover:drop-shadow-[10px_0px_12px_rgba(1,1,1,1)] rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-bold">
            <p className="text-gray-600">ID: {user.userID}</p>
            {user.firstName} {user.lastName}
          </h3>
          <div className="editButton">
            <button className="cursor-pointer">
              <MdEdit
                className="text-2xl"
                onClick={() => handleEdit(user)}
              />
            </button>
          </div>
          <div className="deleteButton">
            <button className="cursor-pointer">
              <MdDelete
                className="text-2xl"
                onClick={() => handleDeleteUser(user.userID)}
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Contact: {user.contact}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Admin: {user.isAdmin ? "Yes" : "No"}</p>
        </div>
      </div>
    </>
  );
};

export default UserDataCard;
