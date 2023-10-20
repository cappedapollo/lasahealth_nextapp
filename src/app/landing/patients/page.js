import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Brenna Foster",
    signupDate: "5/7/23 9:15am",
    appointmentDate: "5/12/23 2:00pm",
    likes: 3,
    dislikes: 4,
  },
  {
    id: 2,
    name: "Brenna Test",
    signupDate: "5/7/23 9:15am",
    appointmentDate: "5/12/23 2:00pm",
    likes: 13,
    dislikes: 5,
  },
  {
    id: 3,
    name: "Perry Foster",
    signupDate: "5/7/23 9:15am",
    appointmentDate: "5/12/23 2:00pm",
    likes: 6,
    dislikes: 4,
  },
  {
    id: 4,
    name: "Perry Foster",
    signupDate: "5/7/23 9:15am",
    appointmentDate: "5/12/23 2:00pm",
    likes: 6,
    dislikes: 4,
  },
  {
    id: 5,
    name: "Perry Foster",
    signupDate: "5/7/23 9:15am",
    appointmentDate: "5/12/23 2:00pm",
    likes: 6,
    dislikes: 4,
  },
  {
    id: 6,
    name: "Perry Foster",
    signupDate: "5/7/23 9:15am",
    appointmentDate: "5/12/23 2:00pm",
    likes: 6,
    dislikes: 4,
  },
];
export default function Patients() {
  return (
    <div className="px-6 pt-12 lg:px-8">
      <h1 className="font-semibold text-2xl m-12">Newest Patients</h1>

      <div className="mt-12 mx-6">
        <table className="w-full text-left">
          <thead className="w-full">
            <tr>
              <th className="pb-4 pl-2" colSpan={4}>
                <p className="text-gray text-xl">Filters</p>
              </th>
            </tr>
            <tr>
              <th className="pb-5">
                <input
                  className="h-10 rounded-lg border border-main px-2 focus:outline-none text-main"
                  placeholder="Search Name"
                  type="text"
                />
              </th>
              <th className="pb-5">
                <select className="h-10 rounded-lg border border-main px-2 focus:outline-none text-main">
                  <option>Signup Date Range</option>
                </select>
              </th>
              <th className="pb-5">
                <select className="h-10 rounded-lg border border-main px-2 focus:outline-none text-main">
                  <option>Appointment Date Range</option>
                </select>
              </th>
              <th className="pb-5">
                <div className="flex gap-1">
                  <select className="h-10 rounded-lg border border-main px-2 focus:outline-none text-main">
                    <option>Likely Condition</option>
                  </select>
                  <select className="h-10 rounded-lg border border-main px-2 focus:outline-none text-main">
                    <option>Unlikely Condition</option>
                  </select>
                </div>
              </th>
            </tr>
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Signup Date</th>
              <th className="p-2">Appointment Date</th>
              <th className="p-2">Health Profile Flags</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.signupDate}</td>
                  <td className="p-2">{item.appointmentDate}</td>
                  <td className="p-2">
                    <div className="flex gap-3 items-center">
                      <Link href="#" className="flex-1 text-orange">
                        {item.likes} likely
                      </Link>
                      <Link href="#" className="flex-1 text-main">
                        {item.dislikes} likely
                      </Link>
                      <button className="h-10 ml-4 bg-transparent border border-main text-main rounded-xl py-1 px-4 hover:bg-main hover:text-white">
                        View Profile
                      </button>
                      <div className="flex-1"></div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
