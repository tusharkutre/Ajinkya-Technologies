import React from "react";
import { MdDelete } from "react-icons/md";

const RolesDataCard = ({ user, handleDelete }) => {
  return (
    <>
      <section className="mx-4">
        <div className="w-full">
          <div className="bg-slate-300 flex justify-between items-center rounded-2xl p-4 mb-3 w-full">
            
            <div className="userRolesData flex flex-col">
              <div className="font-medium">{user.users}</div>{" "}
              <div className="flex gap-2">
                {user.role === "10"
                  ? "Frontend Developer"
                  : user.role === "20"
                  ? "Backend Developer"
                  : user.role === "30"
                  ? "FullStack Developer"
                  : user.role === "40"
                  ? "Mobile App Developer"
                  : ""}
                {user.image && (
                  <img src={user.image} alt={user.role} width={25} />
                )}
              </div>
            </div>

            <div className="deleteButton">
              <button className="cursor-pointer">
                <MdDelete className="text-2xl" onClick={() => handleDelete(user.users)} />
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default RolesDataCard;
