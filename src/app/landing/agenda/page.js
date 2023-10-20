const data = [
  {
    id: 1,
    date: "2022/07/18",
    content: [
      {
        hour: "9 - 9:15am",
        name: "Jackson",
      },
      {
        hour: "9 - 9:15am",
        name: "Jackson",
      },
      {
        hour: "9 - 9:15am",
        name: "Jackson",
      },
    ],
  },
  {
    id: 2,
    date: "2022/07/17",
    content: [
      {
        hour: "9 - 9:15am",
        name: "Jackson",
      },
      {
        hour: "9 - 9:15am",
        name: "Jackson",
      },
      {
        hour: "9 - 9:15am",
        name: "Jackson",
      },
      {
        hour: "9 - 9:15am",
        name: "Jackson",
      },
      {
        hour: "9 - 9:15am",
        name: "Jackson",
      },
    ],
  },
  {
    id: 3,
    date: "2022/07/15",
    content: [
      {
        hour: "9 - 9:15am",
        name: "Jackson",
      },
    ],
  },
];

export default function Agenda() {
  const renderDate = (date) => new Date(date).getDate();

  const renderMonth = (date) =>
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][new Date(date).getMonth()];

  const renderDay = (date) =>
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][new Date(date).getDay()];

  return (
    <div className="pt-12">
      <h1 className="font-semibold text-2xl m-12 px-6 lg:px-8">Agenda</h1>

      <div className="mt-12">
        <table className="w-full text-center">
          <tbody className="w-full">
            {data.map((item) => {
              return (
                <tr key={item.id} className="border-t border-gray">
                  <td className="p-2 align-baseline">
                    <div className="flex gap-3 justify-center items-center">
                      <p className="bg-main text-white rounded-full w-10 h-10 leading-10">
                        {renderDate(item.date)}
                      </p>
                      <p className="text-main">
                        {renderMonth(item.date)}
                        {", "}
                        {renderDay(item.date)}
                      </p>
                    </div>
                  </td>
                  <td className="p-2 align-baseline">
                    {item.content.map((c, i) => {
                      return (
                        <div className="flex gap-3 items-center py-2" key={i}>
                          <p className="flex-1 flex items-center relative before:absolute before:left-0 before:w-3 before:h-3 before:content-[''] before:bg-main before:rounded-full">
                            <span className="ml-12"> {c.hour}</span>
                          </p>
                          <p className="flex-1">{c.name}</p>
                          <button className="h-10 ml-4 bg-transparent border border-main text-main rounded-xl py-1 px-4 hover:bg-main hover:text-white">
                            View Profile
                          </button>
                          <div className="flex-1"></div>
                        </div>
                      );
                    })}
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
