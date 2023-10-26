"use client";

import { usePathname } from "next/navigation";
import Side from "../components/Side";

const navigation = [
  { name: "Home", href: "/landing/home", img: "/imgs/home.png" },
  { name: "Agenda", href: "/landing/agenda", img: "/imgs/agenda.png" },
  { name: "Patients", href: "/landing/patients", img: "/imgs/user.png" },
  { name: "Settings", href: "#", img: "/imgs/setting.png" },
  { name: "FAQs", href: "#", img: "/imgs/faq.png" },
];

export default function LandingLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex">
      <Side navigation={navigation} pathname={pathname} showUserInfo />
      <div className="h-screen w-full overflow-auto">{children}</div>
    </div>
  );
}
