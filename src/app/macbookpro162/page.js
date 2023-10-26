"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const matchingSymptoms = [
  "Refer to endometriosis specialist",
  "Refer to pelvic floor therapy",
  "Discuss pain management options",
];

export default function MacBookPro162() {
  const router = useRouter();

  return (
    <div>
      <button
        className="bg-[url(/shape.svg)] sticky top-6 left-6 md:left-12 bg-cover w-16 h-16 flex justify-center items-center drop-shadow-xl hover:drop-shadow-2xl"
        onClick={() => router.push("/landing/patients")}
      >
        <Image src="/imgs/go-back.png" width={20} height={20} alt="GoBack" />
      </button>
      <div className="pt-6 px-12 lg:pt-12 md:px-24">
        <div className="max-w-4xl	mx-auto my-8 px-10 flex gap-0 md:gap-8 flex-col jusity-center items-center md:flex-row">
          <span className="bg-main rounded-full overflow-hidden">
            <Image
              src={"/imgs/avatar.png"}
              alt={"Avatar"}
              width={120}
              height={120}
            />
          </span>
          <div className="w-full">
            <h2 className="font-semibold text-xl leading-10 text-center md:text-left">
              Susan Smith
            </h2>
            <table className="w-full text-sm text-center">
              <thead>
                <tr>
                  <th>Age</th>
                  <th>DOB</th>
                  <th>Location</th>
                  <th>Patient ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>29</th>
                  <th>Sep 1, 1993</th>
                  <th>Denver, CO</th>
                  <th>1237849</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-4xl	mx-auto py-4">
          <div className="w-full">
            <h2 className="font-semibold m-4 text-xl leading-10 text-center text-main md:text-left">
              General History
            </h2>
            <table className="w-full text-sm text-center">
              <thead>
                <tr>
                  <th>Condition(s)</th>
                  <th>Medication(s)</th>
                  <th>Allergies</th>
                  <th>Family History</th>
                  <th>Lifestyle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="align-baseline">IBS</th>
                  <th className="align-baseline">
                    Lexapro
                    <br /> Ibuprofen
                  </th>
                  <th className="align-baseline">None</th>
                  <th className="align-baseline">N/A</th>
                  <th className="align-baseline">Active</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-4xl	mx-auto py-4">
          <div className="w-full">
            <h2 className="font-semibold m-4 text-xl leading-10 text-center text-main md:text-left">
              Risk Results
            </h2>
            <div className="border-main border-2 rounded-lg p-4">
              <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                <div className="flex-1">
                  <div className="flex gap-3 items-center">
                    <div className="w-12 h-12 rounded-full bg-main text-white text-xl items-center flex justify-center">
                      92%
                    </div>
                    <h1 className="text-main text-xl font-semibold">
                      Endometriosis
                    </h1>
                  </div>
                  <div className="p-2 text-sm">
                    <p>
                      A disease characterized by the presence of
                      endometrium-like epithelium and/or stroma outside the
                      endometrium and myometrium, usually with an associated
                      inflammatory process.
                    </p>
                    <Link className="text-main underline leading-10" href="#">
                      Lear more
                    </Link>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-md mx-4 leading-10">
                    Matching Symptoms
                  </h2>
                  <div className="">
                    {matchingSymptoms.map((item, i) => (
                      <p
                        key={i}
                        className={`leading-10 relative flex items-center before:absolute before:w-8 before:h-8 before:content-[''] ${
                          i > 0
                            ? "before:bg-[url(/uncheck.svg)]"
                            : "before:bg-[url(/check.svg)]"
                        } before:bg-cover`}
                      >
                        <span className="ml-12 text-md">{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
