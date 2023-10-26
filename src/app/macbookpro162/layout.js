"use client";

import { usePathname } from "next/navigation";
import Side from "../components/Side";

const navigation = [
  { name: "Patients", href: "/landing/patients", img: "/imgs/user.png" },
  { name: "Guidelines", href: "#", img: "/imgs/home.png" },
  { name: "Settings", href: "#", img: "/imgs/setting.png" },
  { name: "FAQs", href: "#", img: "/imgs/faq.png" },
];

export default function Layout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex">
      <Side navigation={navigation} pathname={pathname} showUserInfo={false} />
      <div className="h-screen w-full overflow-auto">{children}</div>
    </div>
  );
}
