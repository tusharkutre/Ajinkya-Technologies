import React from "react";

const Teams = () => {
  const people = [
    {
      name: "Ganesh Dandale",
      role: "Web Developer",
      email: "Ganesh2025@example.com",
      imageUrl:`src/assets/Logos/user1.png`,
    },
    {
      name: "Meghan patil",
      role: "Flutter and iOS developer",
      email: "Megan2025@example.com",
      imageUrl:`src/assets/Logos/user1.png`,
    },
    {
      name: "Suraj Divekar",
      role: "Full stack developer",
      email: "suraj@example.com",
      imageUrl:`src/assets/Logos/user1.png`,
    },
    {
      name: "Jyoti Hutagi",
      role: "Web Developer",
      email: "Jyoti2025@example.com",
      imageUrl:`src/assets/Logos/user1.png`
    }, 
    {
      name: "Krishna Parit",
      role: "Android Developer",
      email: "Krishna@example.com",
      imageUrl:`src/assets/Logos/user1.png`
    },
    {
      name: "Suraj Balekundri",
      role: "Backend Developer",
      email: "Ganesh2025@example.com",
      imageUrl:`src/assets/Logos/user1.png`
    },
    {
      name : "Smital shahspurak",
      role: "Android Developer",
      email: "Smital2025@example.com",
      imageUrl:`src/assets/Logos/user1.png`
    },
    {
      name : "Ekta Kulkarni",
      role: "PHP Developer",
      email: "EktaKulkarni@example.com",
      imageUrl:`src/assets/Logos/user1.png`
    },
    {
      name : "Sevant Kumar",
      role: "AI Developer",
      email: "Sevant@example.com",
      imageUrl:`src/assets/Logos/user1.png`
    }
  ];

  return (
    <>
      <div className="bg-white py-14 sm:py-14 mt-10">
        <div className="mx-auto max-w-7xl gap-20 px-0 lg:px-8 ">
          <div className="max-w-xl flex flex-col text-left">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Meet our Team
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="grid mt-10 gap-x-8 gap-y-8 lg:grid-cols-3 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2"
          >
            {/* mapping each person data via map */}
            {people.map((person) => (
              <li key={person.name}>
                {/* each UI card data via map */}
                <div className="flex bg-slate-100 p-5 rounded-2xl items-center gap-x-6">
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="size-16 rounded-full"
                  />
                  <div className="flex flex-col items-start">
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Teams;