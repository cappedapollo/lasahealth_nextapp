"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Landing() {
  const router = useRouter();

  useLayoutEffect(() => {
    router.push("/landing/home");
  });
  return "";
}
