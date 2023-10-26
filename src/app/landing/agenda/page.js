"use client";

import Link from "next/link";
import { getPatientList } from "@/app/data/patients";
import moment from "moment";

export default function Agenda() {
  const agenda = getPatientList()
    .filter((patient) =>
      moment(patient.appointmentDate).isAfter(moment().startOf("day"))
    )
    .sort(
      (a, b) =>
        moment(a.appointmentDate).startOf("day").valueOf() -
        moment(b.appointmentDate).startOf("day").valueOf()
    )
    .reduce((res, item) => {
      const ts = moment(item.appointmentDate).startOf("day").valueOf();
      const hour =
        moment(item.appointmentDate).format("hh:mm a") +
        " - " +
        moment(item.appointmentDate).add(45, "minutes").format("hh:mm a");
      res[ts] = res[ts]
        ? [
            ...res[ts],
            {
              hour: hour,
              patientId: item.id,
            },
          ]
        : [
            {
              hour: hour,
              patientId: item.id,
            },
          ];
      return res;
    }, {});

  const renderDate = (date) => {
    return new Date(date).getDate();
  };

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
    <div className="pt-12 text-black">
      <h1 className="font-semibold text-2xl m-12 px-6 lg:px-8">Agenda</h1>

      <div className="mt-12">
        <table className="w-full text-center">
          <tbody className="w-full">
            {Object.keys(agenda).map((date) => {
              return (
                <tr key={date} className="border-t border-gray">
                  <td className="p-2 align-baseline">
                    <div className="flex mx-8 gap-3 items-center">
                      <p
                        className={`${
                          Number(date) === moment().startOf("day").valueOf()
                            ? "bg-main text-white"
                            : ""
                        } rounded-full w-10 leading-10 float-right`}
                      >
                        {renderDate(Number(date))}
                      </p>
                      <p className="text-main text-left">
                        {renderMonth(Number(date))}
                        {", "}
                        {renderDay(Number(date))}
                      </p>
                    </div>
                  </td>
                  <td className="p-2 align-baseline">
                    {agenda[date].map((c, i) => {
                      return (
                        <div className="flex gap-3 items-center py-2" key={i}>
                          <p className="flex-1 flex items-center relative before:absolute before:left-0 before:w-3 before:h-3 before:content-[''] before:bg-main before:rounded-full">
                            <span className="ml-12"> {c.hour}</span>
                          </p>
                          <p className="flex-1">
                            {
                              getPatientList().find(
                                ({ id }) => id == c.patientId
                              )["name"]
                            }
                          </p>
                          <Link
                            href={`/landing/patients/${c.patientId}`}
                            className="btn-main-inverse ml-4"
                          >
                            View Profile
                          </Link>
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
