import React from "react";
import UserForm from "./UserForm";
import { X } from "lucide-react";
// This is userModal component
const UsersModal = ({ modalState, callBackModalState, onAddUser }) => {
  const handleCloseModal = () => {
    callBackModalState({ dialogType: false, userData: null });
  };
  return (
    <>
      <div className="text-white fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
        <div className="modal w-sm md:w-xl lg:w-2xl lg:ml-50 md:top-[350px] top-[350px]  bg-white py-10 rounded-lg drop-shadow-2xl">
          <h1 className="text-black text-center">Add a User</h1>
          <button
            className="absolute rounded cursor-pointer top-0 right-0 p-2 bg-black"
            onClick={handleCloseModal}
          >
            <X />
          </button>

          <div className="relative mt-5 ">
            <UserForm
              userData={modalState.userData}
              onSubmit={(userData) => onAddUser(userData)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersModal;
