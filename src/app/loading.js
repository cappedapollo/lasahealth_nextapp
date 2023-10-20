import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Image
        src="/imgs/logo-green.png"
        alt="Lasa Health Logo"
        className="dark:invert "
        width={409 / 1.5}
        height={96 / 1.5}
      />
    </div>
  );
}
