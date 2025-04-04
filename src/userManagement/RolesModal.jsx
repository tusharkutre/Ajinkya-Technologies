import React, { useState } from "react";
import { X } from "lucide-react";
import Dropdown from "./Dropdown";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";

const RolesModal = ({ onClose , onSubmit , roles}) => {
  const [users, setUsers] = useState("");
  const [role, setRole] = useState({value:"",image:""}); // // Store the selected dropdown value and image

  const {
    register,
    handleSubmit,
    formState: { errors }, //An error message component to handle errors
  } = useForm();

  //logic of dropdown 
  const onDropdownChange = (value) => {
    const selectedRole = roles.find((role) => role.value === value);
    console.log("log from RolesModal",selectedRole);
    setRole(selectedRole); // Update the role state
  };

  const onSubmitData = () => {
    const userData = {
      users,
      role: role.value.toString(),
      image : role.image
    };
    // Submitting the data
    onSubmit(userData , roles);
    console.log(userData);
  };

  function clearUserData() {
    setUsers("");
  }

  return (
    <>
      <div className="text-white fixed inset-0 bg-opacity-20 backdrop-blur-sm ">
        <div className="modal w-90 absolute lg:top-[300px] md:top-[350px] top-[370px] left-1/2 transform -translate-x-1/2 md:-translate-x-1/4 lg:-translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-lg drop-shadow-2xl">
          <button
            className="absolute cursor-pointer top-0 right-0 p-2 bg-red-600 "
            onClick={onClose}
          >
            <X />
          </button>

          {/* user form code */}
          <form onSubmit={handleSubmit(onSubmitData)}>
            <div className="flex flex-col gap-4">
              <TextField
                className="w-full"
                value={users} // Use the value prop instead of defaultValue
                autoFocus
                required
                id="outlined-basic"
                label="Enter Developer Name"
                variant="outlined"
                onChange={(event) => setUsers(event.target.value)}
              />
                {/* Passing the onDropdownChange callback function */}
              <Dropdown onDropdownChange={onDropdownChange}/> 

              <div className="gap-3 flex flex-col md:flex md:flex-row md:justify-start  lg:justify-end">
                <button
                  className="text-lg cursor-pointer font-semibold rounded-md bg-blue-800 lg:bg-blue-600 text-white py-2 px-4  md:w-1/2"
                  type="submit"
                >
                  Create
                </button>
                <button
                  onClick={clearUserData}
                  className="text-lg cursor-pointer font-semibold rounded-md bg-blue-800 lg:bg-blue-600 text-white py-2 px-4  md:w-1/2"
                  type="reset"
                >
                  Clear
                </button>
              </div>
            </div>

          </form>
          

        </div>
      </div>
    </>
  );
};

export default RolesModal;