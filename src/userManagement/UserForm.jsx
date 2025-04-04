// import React from "react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { ErrorMessage } from "@hookform/error-message";
// import TextField from "@mui/material/TextField";

// const UserForm = ({ onSubmit, userData }) => {
//   // const [formData, setFormData] = useState({
//   //   firstName: userData?.firstName ?? "",
//   //   lastName: userData?.lastName ?? "",
//   //   email: userData?.email ?? "",
//   //   contact: userData?.contact ?? "",
//   //   isAdmin: userData?.isAdmin ?? false,
//   // });

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [name]: value, // Update only the changed field
//   //   }));
//   // };

//   // const handleCheckboxChange = (e) => {
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     isAdmin: e.target.checked, // For checkbox fields like isAdmin
//   //   }));
//   // };

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       firstName: userData?.firstName ?? "",
//       lastName: userData?.lastName ?? "",
//       email: userData?.email ?? "",
//       contact: userData?.contact ?? "",
//       isAdmin: userData?.isAdmin ?? false,
//     },
//   });

//   console.log(formData);

//   const onSubmitData = () => {
//     const userData = {
//       userID,
//       firstName,
//       lastName,
//       email,
//       contact,
//       isAdmin,
//     };
//     onSubmit(userData);
//   };

//   function clearAllInputFields() {
//     setUerID("");
//     setFirstName("");
//     setLastName("");
//     setRole("");
//     setEmail("");
//     setContact("");
//     setHasAdmin(false);
//   }

//   return (
//     <>
//       <form
//         style={{
//           overflowY: "auto",
//           maxHeight: "80vh",
//         }}
//         onSubmit={handleSubmit(onSubmitData)}
//       >
//         <div className="p-4  rounded-md ">
//           {/* Added TextField component from Material UI */}
//           <div className="grid  grid-cols-1 gap-4 lg:grid lg:grid-cols-2 lg:gap-4">
//             <TextField
//               defaultValue=""
//               autoFocus
//               required
//               id="outlined-basic"
//               label="User ID"
//               variant="outlined"
//               onChange={(event) => setUerID(event.target.value)}
//             />

//             <div className="firstName flex flex-col">
//               <TextField
//                 required
//                 {...register("firstName", {
//                   required: true,
//                   // pattern: /^[A-Za-z]+$/i,
//                   // multiple error messages
//                   pattern: {
//                     value: /^[A-Z]/,
//                     message: "should start with caps only",
//                   },
//                   maxLength: {
//                     value: 10,
//                     message: "This input exceed maxLength.",
//                   },
//                   minLength: {
//                     value: 4,
//                     message: "This input exceed minLength.",
//                   },
//                 })}
//                 id="first_name"
//                 label="First Name"
//                 variant="outlined"
//                 defaultValue=""
//                 onChange={setFormData((prev) => {
//                   firstName: prev.target.value;
//                 })}
//               />
//               <ErrorMessage
//                 errors={errors}
//                 name="firstName"
//                 render={({ message }) =>
//                   message && (
//                     <span className="text-red-600">
//                       {Object.entries(message)
//                         .map(([type, message]) => message)
//                         .join("")}
//                     </span>
//                   )
//                 }
//               />
//             </div>

//             <TextField
//               required
//               id="outlined-basic"
//               label="Last Name"
//               variant="outlined"
//               defaultValue=""
//               onChange={(event) =>
//                 setFormData({ lastName: event.target.value })
//               }
//             />

//             <TextField
//               required
//               id="outlined-basic"
//               label="Email Address"
//               variant="outlined"
//               defaultValue=""
//               onChange={(event) => setEmail(event.target.value)}
//             />

//             <TextField
//               required
//               id="outlined-basic"
//               label="Contact Number"
//               variant="outlined"
//               defaultValue=""
//               onChange={(event) => setContact(event.target.value)}
//             />

//             {/* border line */}
//             <div className="border-t-2 border-gray-200 pt-4">
//               <div className="border-2 space-x-2 border-gray-200 rounded-md lg:rounded-xl p-2 w-fit lg:w-fit">
//                 <input
//                   type="checkbox"
//                   id="isAdmin"
//                   name="isAdmin"
//                   checked={formData?.isAdmin}
//                   onChange={(event) => setHasAdmin(event.target.checked)}
//                 />
//                 <label className="text-black" htmlFor="isAdmin">
//                   Is Admin?
//                 </label>
//               </div>

//               <br />
//             </div>
//           </div>
//         </div>

//         <div className=" p-4 gap-3 flex flex-col md:flex md:flex-row md:justify-start  lg:justify-end">
//           <button
//             className="text-lg cursor-pointer font-semibold rounded-md bg-blue-800 lg:bg-blue-600 text-white py-2 px-4 lg:w-1/6 md:w-1/2"
//             type="submit"
//           >
//             Create
//           </button>
//           <button
//             onClick={clearAllInputFields}
//             className="text-lg cursor-pointer font-semibold rounded-md bg-blue-800 lg:bg-blue-600 text-white py-2 px-4 lg:w-1/6 md:w-1/2"
//             type="reset"
//           >
//             Clear
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default UserForm;

import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import TextField from "@mui/material/TextField";

const UserForm = ({ onSubmit, userData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      firstName: userData?.firstName ?? "",
      lastName: userData?.lastName ?? "",
      email: userData?.email ?? "",
      contact: userData?.contact ?? "",
      isAdmin: userData?.isAdmin ?? false,
    },
  });

  const onSubmitData = (data) => {
    // The data object will already contain the values from the form
    onSubmit(data);
  };

  const clearAllInputFields = () => {
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("email", "");
    setValue("contact", "");
    setValue("isAdmin", false);
  };

  return (
    <>
      <form
        style={{
          overflowY: "auto",
          maxHeight: "80vh",
        }}
        onSubmit={handleSubmit(onSubmitData)}
      >
        <div className="p-4 rounded-md">
          <div className="grid grid-cols-1 gap-4 lg:grid lg:grid-cols-2 lg:gap-4">
            <TextField
              required
              {...register("userID", { required: "User ID is required" })}
              id="userID"
              label="User ID"
              variant="outlined"
              autoFocus
              autoComplete="off"
            />

            <div className="firstName flex flex-col">
              <TextField
                required
                {...register("firstName", {
                  required: "First name is required",
                  pattern: {
                    value: /^[A-Z]/,
                    message: "First name should start with a capital letter",
                  },
                  maxLength: {
                    value: 10,
                    message: "First name should not exceed 10 characters",
                  },
                  minLength: {
                    value: 4,
                    message: "First name should be at least 4 characters long",
                  },
                })}
                id="first_name"
                label="First Name"
                variant="outlined"
              />
              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ message }) => (
                  <span className="text-red-600">{message}</span>
                )}
              />
            </div>

            <TextField
              required
              {...register("lastName", { required: "Last name is required" })}
              id="last_name"
              label="Last Name"
              variant="outlined"
            />

            <TextField
              required
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              id="email"
              label="Email Address"
              variant="outlined"
            />

            <TextField
              required
              {...register("contact", {
                required: "Contact number is required",
              })}
              id="contact"
              label="Contact Number"
              variant="outlined"
            />

            <div className="border-t-2 border-gray-200 pt-4">
              <div className="border-2 space-x-2 border-gray-200 rounded-md lg:rounded-xl p-2 w-fit lg:w-fit">
                <input type="checkbox" id="isAdmin" {...register("isAdmin")} />
                <label className="text-black" htmlFor="isAdmin">
                  Is Admin?
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 gap-3 flex flex-col md:flex md:flex-row md:justify-start lg:justify-end">
          <button
            className="text-lg cursor-pointer font-semibold rounded-md bg-blue-800 lg:bg-blue-600 text-white py-2 px-4 lg:w-1/6 md:w-1/2"
            type="submit"
          >
            Create
          </button>
          <button
            onClick={clearAllInputFields}
            className="text-lg cursor-pointer font-semibold rounded-md bg-blue-800 lg:bg-blue-600 text-white py-2 px-4 lg:w-1/6 md:w-1/2"
            type="reset"
          >
            Clear
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;