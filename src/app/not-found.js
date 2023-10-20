import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen gap-4 w-full flex justify-center items-center">
      <Image
        src="/imgs/logo-green.png"
        alt="Lasa Health Logo"
        className="dark:invert "
        width={409 / 1.5}
        height={96 / 1.5}
      />
      <Link
        className="sticky top-16 bg-[url(/shape.svg)] bg-cover w-16 h-16 flex justify-center items-center drop-shadow-xl hover:drop-shadow-2xl"
        href="/"
      >
        <Image src="/imgs/go-back.png" width={20} height={20} alt="GoHome" />
      </Link>
    </div>
  );
}
