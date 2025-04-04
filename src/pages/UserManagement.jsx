import React from "react";
import { useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";

const UserManagement = () => {
  const navigate = useNavigate();

  const handleHomeRoute = () => {
    navigate("/");
  };

  const items = [
    { buttonName: "Users", image: "/src/assets/user.png" },
    { buttonName: "Roles", image: "/src/assets/userRoles.png" }
  ];

  const handleButtonClick = (item) => {
    if (item === "Users") {
      navigate("/usermanagement/users");
    } else if (item === "Roles") {
      navigate("/usermanagement/roles");
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 lg:m-5 lg:ml-[280px]">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg shadow-lg p-6 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-poppins font-semibold text-gray-800 mb-12">User Management</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => handleButtonClick(item.buttonName)}
                className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <img src={item.image} alt={item.buttonName} className="w-8 h-8" />
                    </div>
                    <span className="text-xl font-poppins font-medium text-gray-800">{item.buttonName}</span>
                  </div>
                  <div className="text-blue-600 group-hover:text-blue-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleHomeRoute}
            className="fixed bottom-6 left-6 lg:left-10 flex items-center space-x-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50"
          >
            <TiHome className="text-xl" />
            <span className="font-poppins font-medium">Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;