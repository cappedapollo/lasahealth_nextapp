/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getProfile } from "../data/profile";

const navigation = [
  { name: "Home", href: "/landing" },
  { name: "Endometriosis", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Login", href: "/login" },
];

export default function Login() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = () => {
    console.log(password);
    if (getProfile().username === username) router.push("/landing");
    else window.alert("Username or password is invalid.");
  };
  return (
    <div>
      <header className="absolute bg-main inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                src="/imgs/logo.png"
                alt="Lasa Health Logo"
                className="dark:invert "
                width={409 / 1.5}
                height={96 / 1.5}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white leading-6 py-2"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="font-semibold leading-6 py-2 px-6 bg-white text-main rounded-xl"
            >
              Endometriosis Screening
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:shadow-lg sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  src="/imgs/logo-green.png"
                  alt="Lasa Health Logo"
                  className=""
                  width={409 / 1.5}
                  height={96 / 1.5}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="font-semibold -mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Endometriosis Screening
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 h-screen flex items-center">
        <div className="w-96 bg-gray-100 m-auto px-8 py-16 shadow-lg rounded-3xl -translate-y-12">
          <h1 className="text-center text-3xl mb-5">Login</h1>
          <div className="mb-3">
            <label className="block mb-2">Username</label>
            <input
              className="form-control w-full"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2">Password</label>
            <input
              className="form-control w-full"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-right mb-3">
            <Link href="#" className="text-main">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center pt-3">
            <button className="btn-main w-1/2" onClick={onSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
