import Image from "next/image";
import Link from "next/link";

export default function Side({
  navigation,
  pathname,
  showUserInfo = true,
  ...props
}) {
  return (
    <aside className={`bg-yellow p-8 pt-12 hidden lg:block`}>
      <div className="my-8">
        <Link href="/">
          <Image
            src="/imgs/logo-green.png"
            alt="Lasa Health Logo"
            className="dark:invert "
            width={409 / 1.5}
            height={96 / 1.5}
          />
        </Link>
      </div>
      {showUserInfo && (
        <div className="flex items-center leading-6 my-8 pl-4 py-4 bg-gradient-to-r from-yellow to-green30 rounded-xl">
          <span className="mr-2 bg-green30 rounded-full overflow-hidden">
            <Image
              src={"/imgs/avatar.png"}
              alt={"Avatar"}
              width={60}
              height={60}
            />
          </span>
          <div>
            <h2 className="font-semibold text-sm leading-6">
              <Link href="/landing/profile" className="hover:text-main">
                Centerville Clinic
              </Link>
            </h2>
            <p className="text-sm">Dr. Anne</p>
          </div>
        </div>
      )}
      <div className="my-8">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center leading-6 my-2 pl-8 py-2 ${
              pathname === item.href
                ? "bg-main text-white rounded-2xl hover:text-white"
                : "hover:text-main"
            }`}
          >
            <span className="mr-4 p-2 bg-white rounded-full">
              <Image src={item.img} alt={item.name} width={30} height={30} />
            </span>
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
}
