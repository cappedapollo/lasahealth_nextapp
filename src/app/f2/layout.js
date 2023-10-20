"use client";

import { usePathname } from "next/navigation";
import Side from "../components/Side";

const navigation = [
  { name: "Patients", href: "/landing/patients", img: "/imgs/patient.png" },
  { name: "Guidelines", href: "/f2/guidelines", img: "/imgs/home.png" },
  { name: "Settings", href: "/landing/settings", img: "/imgs/setting.png" },
  { name: "FAQs", href: "/landing/faqs", img: "/imgs/faq.png" },
];

export default function F2Layout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex">
      <Side navigation={navigation} pathname={pathname} showUserInfo={false} />
      <div className="h-screen w-full overflow-auto">{children}</div>
    </div>
  );
}
