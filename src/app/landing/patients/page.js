"use client";

import Link from "next/link";
import { getPatientList } from "@/app/data/patients";
import PatientCreateModal from "@/app/components/patients/create-modal";
import { useState } from "react";

export default function Patients() {
  const [creatModalVisible, setCreateModalVisible] = useState(false);
  const [patientList, setPatientList] = useState(getPatientList());
  const onNewPatientCreated = (newPatient) => {
    setPatientList((draft) => [...draft, newPatient]);
  };

  return (
    <div className="px-6 pt-12 lg:px-8">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl m-12">Patients</h1>
        <button
          className="btn-main"
          onClick={() => setCreateModalVisible(true)}
        >
          Add New Patient
        </button>
      </div>

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
                  className="form-control"
                  placeholder="Search Name"
                  type="text"
                />
              </th>
              <th className="pb-5">
                <select className="form-control">
                  <option>Signup Date Range</option>
                </select>
              </th>
              <th className="pb-5">
                <select className="form-control">
                  <option>Appointment Date Range</option>
                </select>
              </th>
              <th className="pb-5">
                <div className="flex gap-1">
                  <select className="form-control">
                    <option>Likely Condition</option>
                  </select>
                  <select className="form-control">
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
            {patientList.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">
                    {item.signupDate || "10/18/23 5:45pm"}
                  </td>
                  <td className="p-2">
                    {item.appointmentDate || "10/18/23 5:45pm"}
                  </td>
                  <td className="p-2">
                    <div className="flex gap-3 items-center">
                      <Link href="#" className="flex-1 text-orange">
                        {item.likes || 0} likely
                      </Link>
                      <Link href="#" className="flex-1 text-main">
                        {item.unlikes || 0} unlikely
                      </Link>
                      <Link
                        href={`/landing/patients/${item.id}`}
                        className="btn-main-inverse ml-4"
                      >
                        View Profile
                      </Link>
                      <div className="flex-1"></div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <PatientCreateModal
        visible={creatModalVisible}
        setVisible={setCreateModalVisible}
        onCreated={onNewPatientCreated}
      />
    </div>
  );
}
