import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";

// Form field configurations
const formFields = {
  firstName: {
    label: "First name",
    type: "text",
    autoComplete: "given-name",
    required: true,
  },
  lastName: {
    label: "Last name",
    type: "text",
    autoComplete: "family-name",
    required: true,
  },
  company: {
    label: "Company",
    type: "text",
    autoComplete: "organization",
    required: true,
    fullWidth: true,
  },
  email: {
    label: "Email",
    type: "email",
    autoComplete: "email",
    required: true,
    fullWidth: true,
  },
  phoneNumber: {
    label: "Phone number",
    type: "text",
    placeholder: "123-456-7890",
    required: true,
    fullWidth: true,
  },
  message: {
    label: "Message",
    type: "textarea",
    rows: 4,
    required: true,
    fullWidth: true,
  },
};

const countries = [
  { code: "IND", label: "India" },
  { code: "US", label: "United States" },
  { code: "EU", label: "European Union" },
];

// Reusable form components
const FormField = ({ 
  id, 
  label, 
  type, 
  value, 
  onChange, 
  required, 
  autoComplete, 
  placeholder,
  rows,
  fullWidth 
}) => {
  const baseInputClasses = "block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm";
  const containerClasses = `mt-2.5 ${fullWidth ? "sm:col-span-2" : ""}`;

  return (
    <div className={containerClasses}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        {type === "textarea" ? (
          <textarea
            id={id}
            name={id}
            rows={rows}
            value={value}
            onChange={onChange}
            required={required}
            className={baseInputClasses}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            autoComplete={autoComplete}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className={baseInputClasses}
          />
        )}
      </div>
    </div>
  );
};

const PhoneInput = ({ value, onChange, country, onCountryChange }) => (
  <div className="sm:col-span-2">
    <label
      htmlFor="phone-number"
      className="block text-sm font-semibold leading-6 text-gray-900"
    >
      Phone number
    </label>
    <div className="mt-2">
      <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        <div className="grid shrink-0 grid-cols-1 focus-within:relative">
          <select
            id="country"
            name="country"
            autoComplete="country"
            aria-label="Country"
            value={country}
            onChange={onCountryChange}
            required
            className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
          >
            {countries.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 h-5 w-5 self-center justify-self-end text-gray-500 sm:h-4 sm:w-4"
          />
        </div>
        <input
          id="phone-number"
          name="phone-number"
          type="text"
          placeholder="123-456-7890"
          value={value}
          onChange={onChange}
          required
          className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
        />
      </div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
    country: "US",
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server
    console.log({ ...formData, agreed });
  };

  return (
    <div className="relative isolate bg-white">
      {/* Background gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Contact Us
          </h2>
          <p className="mt-2 text-base leading-8 text-gray-600 sm:text-lg">
            Feel free to reach out to us. We're here to help!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {Object.entries(formFields).map(([field, config]) => {
              if (field === "phoneNumber") return null;
              return (
                <FormField
                  key={field}
                  id={field}
                  label={config.label}
                  type={config.type}
                  value={formData[field]}
                  onChange={handleChange(field)}
                  required={config.required}
                  autoComplete={config.autoComplete}
                  placeholder={config.placeholder}
                  rows={config.rows}
                  fullWidth={config.fullWidth}
                />
              );
            })}
            
            <PhoneInput
              value={formData.phoneNumber}
              onChange={handleChange("phoneNumber")}
              country={formData.country}
              onCountryChange={handleChange("country")}
            />

            <Field className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                  />
                </Switch>
              </div>
              <Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  privacy&nbsp;policy
                </a>
                .
              </Label>
            </Field>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              disabled={!agreed}
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Contact;