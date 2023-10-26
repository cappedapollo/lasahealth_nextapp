"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { addNewPatient } from "@/app/data/patients";

export default function PatientCreateModal({
  visible,
  setVisible,
  onCreated,
  ...props
}) {
  const cancelButtonRef = useRef(null);
  const [newPatient, setNewPatient] = useState();
  const onSubmit = () => {
    const item = { id: new Date().getTime(), ...newPatient };
    addNewPatient(item);
    onCreated(item);
    setVisible(false);
  };

  const onInputChange = (e) =>
    setNewPatient((draft) => ({ ...draft, [e.target.name]: e.target.value }));

  return (
    <Transition.Root show={visible} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => setVisible(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-semibold leading-10 px-4 sm:px-6 py-3 text-gray-900 bg-gray-50"
                >
                  New Patient
                </Dialog.Title>
                <div className="p-4 sm:p-6">
                  <div className="my-1 w-full">
                    <label className="block text-base">Name</label>
                    <input
                      className="form-control w-full"
                      type="text"
                      name="name"
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="my-1 w-full">
                    <label className="block text-base">Age</label>
                    <input
                      className="form-control w-full"
                      type="number"
                      name="age"
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="my-1 w-full">
                    <label className="block text-base">DOB</label>
                    <input
                      className="form-control w-full"
                      type="date"
                      name="dob"
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="my-1 w-full">
                    <label className="block text-base">Location</label>
                    <input
                      className="form-control w-full"
                      type="text"
                      name="location"
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse sm:px-6">
                  <button type="button" className="btn-main" onClick={onSubmit}>
                    Add New
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
