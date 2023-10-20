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
export default function Landing() {
  return (
    <div className="px-6 pt-12 lg:px-8">
      <div className="flex gap-8">
        <div className="basis-2/3 h-56 bg-green30 rounded-2xl py-10 px-10">
          <h1 className="font-semibold text-2xl mb-5">Overflow</h1>
          <div className="flex">
            <div className="flex-1 text-center">
              <h2 className="text-main leading-10 text-xl">
                Appointment Today
              </h2>
              <span className="font-semibold text-2xl">8</span>
            </div>
            <div className="flex-1 text-center">
              <h2 className="text-main leading-10 text-xl">
                New Patients This Week
              </h2>
              <span className="font-semibold text-2xl">5</span>
            </div>
          </div>
        </div>
        <div className="basis-1/3 h-56 bg-lightgreen rounded-2xl py-10 px-10">
          <h1 className="font-semibold text-2xl mb-2">FAQs</h1>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-main text-lg text-center">
              Learn about frequently asked questions here
            </h2>
            <button className="h-10 mt-4 bg-transparent border border-main text-main rounded-xl py-1 px-4 hover:bg-main hover:text-white">
              View FAQ
            </button>
          </div>
        </div>
      </div>

      <h1 className="font-semibold text-2xl ml-4 my-12">Newest Patients</h1>

      <div className="mt-12 mx-6">
        <table className="w-full text-left">
          <thead className="w-full">
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
