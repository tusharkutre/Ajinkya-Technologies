import React, { useEffect, useState } from "react";
import UsersModal from "./UsersModal";
import UserDataCard from "./UserDataCard";
import { useNavigate } from "react-router-dom";

// React icons
import team from "../assets/team.png";
import { IoCaretBack } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";

const Users = () => {
  const [showUsersModal, setShowUsersModal] = useState({
    dialogState: false,
    userData: null,
  });
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const routeBack = useNavigate();

  const handleClick = () => {
    routeBack("/usermanagement");
  };

  //has each user data
  const handleAddUser = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
    setShowUsersModal({ dialogState: false, userData: null });
  };

  const handleDeleteUser = (userID) => {
    // const storedUsers = localStorage.getItem("users");
    // const users = storedUsers ? JSON.parse(storedUsers) : [];
    const updatedUsers = users.filter((user) => user.userID !== userID);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const handleEdit = (user) => {
    setShowUsersModal({ dialogState: true, userData: user });
  };

  const handleModalOpen = () => {
    setShowUsersModal({ dialogState: true, userData: null });
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users)); //key : updated value from state
  }, [users]); //dependency array: whenever users change, update local storage

  console.log(users);

  return (
    <>
      {" "}
      <div className="mx-4 rounded-md flex flex-col px-2 relative h-screen lg:m-5 lg:ml-[280px]">
        
        <div className="buttons">
          <button
            onClick={handleClick}
            className="px-4 cursor-pointer rounded-2xl py-3 sm:right-40 top-2 text-white  absolute bg-black shadow-lg hover:bg-gray-800 transition-all duration-300"
          >
            <div className="flex items-center gap-1 ">
              <span>
                <IoCaretBack className="text-lg" />
              </span>
              <span className="font-medium">Route Back</span>
            </div>
          </button>
          <button
            onClick={handleModalOpen}
            className="bg-blue-900 cursor-pointer absolute right-2 py-3 top-2 rounded-2xl px-4 text-white shadow-lg hover:bg-blue-800 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium">Add User</span>
              <span>
                <FaUserPlus className="text-lg" />
              </span>
            </div>
          </button>
        </div>

        <div className="img flex items-start gap-4 mt-24 mb-6">
          <h2 className="text-4xl font-medium">Users</h2>
          <span>
            <img src={team} width={40} alt="" />
          </span>
        </div>

        {users.length > 0 && (
          <div className="flex container">
            <div className="grid mx-auto flex-wrap sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-2/2 mr-4">
              {users.map((user, index) => (
                <UserDataCard
                  key={index}
                  user={user}
                  handleDeleteUser={handleDeleteUser}
                  handleEdit={handleEdit}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {showUsersModal?.dialogState && (
        <UsersModal
          modalState={showUsersModal}
          callBackModalState={setShowUsersModal}
          onAddUser={handleAddUser}
          users={users}
        />
      )}
    </>
  );
};

export default Users;
