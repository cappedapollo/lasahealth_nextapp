"use client";

import { usePathname } from "next/navigation";
import Side from "../components/Side";

const navigation = [
  { name: "Home", href: "/landing", img: "/imgs/home.png" },
  { name: "Agenda", href: "/landing/agenda", img: "/imgs/agenda.png" },
  { name: "Patients", href: "/landing/patients", img: "/imgs/patient.png" },
  { name: "Settings", href: "/landing/settings", img: "/imgs/setting.png" },
  { name: "FAQs", href: "/landing/faqs", img: "/imgs/faq.png" },
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
