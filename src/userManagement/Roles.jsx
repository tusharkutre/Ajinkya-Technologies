// import statements
import React, { useEffect, useState } from "react";
import projectManager from "../assets/project-manager.png";
import { IoCaretBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import RolesModal from "./RolesModal";
import RolesDataCard from "./RolesDataCard";

// icons
import reactIcon from "../assets/reactjs.png";
import nodeJS from "../assets/nodejs.png";
import fullStack from "../assets/fullStack.png";
import userRoles from "../assets/userRoles.png";
import smartphone from "../assets/smartphone.png";

const Roles = () => {
  // array of objs
  const roles = [
    { value: 10, label: "Frontend Developer", image: reactIcon },
    { value: 20, label: "Backend Developer", image: nodeJS },
    { value: 30, label: "FullStack Developer", image: fullStack },
    { value: 40, label: "Mobile App Developer", image: smartphone },
  ];

  const [showRolesModal, setShowRolesModal] = useState(false);

  const [rolesData, setRolesData] = useState(() => {
    const storedRoles = localStorage.getItem("roles");
    return storedRoles ? JSON.parse(storedRoles) : [];
  });

  const routeBack = useNavigate();
  const handleClick = () => {
    routeBack("/usermanagement");
  };

  //adding user roles one by one
  const handleAddRoles = (userRoles) => {
    //array of role values
    if (userRoles.role && ["10", "20", "30", "40"].includes(userRoles.role)) {
      const selectedRole = roles.find(
        (role) => role.value === parseInt(userRoles.role)
      );
      setRolesData((prevUsers) => [
        ...prevUsers,
        {
          users: userRoles.users,
          role: userRoles.role,
          image: selectedRole.image,
        },
      ]);
      setShowRolesModal(false);
    } else {
      console.error("Invalid role value");
    }
  };

  //handle delete onClick of the button
  const handleDelete = (users) => {
    const updatedRoles = rolesData.filter((role) => role.users !== users);
    setRolesData(updatedRoles);
  };

  //when the app mounts , only on the first render data will be displayed
  useEffect(() => {
    localStorage.setItem("roles", JSON.stringify(rolesData));
  }, [rolesData]);

  console.log("log from Roles", rolesData);

  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen  lg:m-5 lg:ml-[280px]">
       
        <div className="buttons">
          <button
            onClick={handleClick}
            className="px-4 ml-4 rounded-2xl py-3 lg:ml-0 cursor-pointer sm:right-42 top-4 text-white absolute  bg-black shadow-lg hover:bg-gray-800 transition-all duration-300"
          >
            <div className="flex items-center gap-1">
              <span>
                <IoCaretBack className="text-lg" />
              </span>
              <span className="font-medium">Route Back</span>
            </div>
          </button>
          <button
            onClick={() => setShowRolesModal(true)}
            className="absolute top-4 right-4 bg-blue-900 cursor-pointer text-white px-4 py-3 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="font-medium">Add Roles</span>
              <span>
                <img width={26} src={projectManager} alt="project manager" />
              </span>
            </div>
          </button>
        </div>

        {showRolesModal && (
          <RolesModal
            onClose={() => setShowRolesModal(false)}
            onSubmit={handleAddRoles}
            roles={roles}
          />
        )}

        <div className="w-full">
          <div className="mt-25 space-y-10">
            <div className="img flex items-center">
              <h2 className="text-4xl font-medium mx-4">Roles</h2>
              <span>
                <img src={userRoles} width={40} alt="" />
              </span>
            </div>

            {/* Display the user data via map */}
            <ul className="h-max overflow-y-auto">
              {rolesData.map((role, index) => (
                <RolesDataCard
                  key={index}
                  user={role}
                  handleDelete={handleDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Roles;
