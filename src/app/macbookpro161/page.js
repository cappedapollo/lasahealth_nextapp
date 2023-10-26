import Image from "next/image";

export default function MacBookPro161() {
  return (
    <div className="px-6 pt-12 lg:px-8">
      <div className="max-w-3xl	mx-auto">
        <div className="flex h-5 my-12 rounded-sm overflow-hidden">
          <div className="w-[30%] bg-main"></div>
          <div className="w-[70%] bg-gray-200"></div>
        </div>
        <h1 className="font-semibold py-2 text-xl text-center text-orange">
          Pelvic Pain
        </h1>
        <h1 className="font-semibold py-2 text-2xl text-center">
          How often do you experience pelvic pain?
        </h1>

        <div className="w-2/3 m-auto py-4 mt-4">
          <button className="w-full bg-main text-white rounded-md font-semibold p-2 my-4">
            Nearly every day
          </button>
          <button className="w-full bg-gray-200 rounded-md font-semibold p-2 my-4">
            Several times per week
          </button>
          <button className="w-full bg-gray-200 rounded-md font-semibold p-2 my-4">
            Several times per month
          </button>
          <button className="w-full bg-gray-200 rounded-md font-semibold p-2 my-4">
            Only on my menstrual cycle
          </button>
          <button className="w-full bg-gray-200 rounded-md font-semibold p-2 my-4">
            Rarely
          </button>
        </div>

        <div className="float-right">
          <button className="bg-[url(/shape.svg)] bg-cover w-16 h-16 flex justify-center items-center drop-shadow-xl hover:drop-shadow-2xl">
            <Image
              src="/imgs/go-next.png"
              width={20}
              height={20}
              alt="GoNext"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
