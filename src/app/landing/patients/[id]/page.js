"use client";

import Accordion from "@/app/components/Accordion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NotFound from "@/app/not-found";
import { getPatientList } from "@/app/data/patients";

const matchingSymptoms = [
  "Pelvic Pain",
  "Pelvic pain correlated with period",
  "Pain with intercourse",
  "Bleeding between periods",
];

const questions = [
  "During your period, do you experience pelvic, abdominal, or lower back pain that limits your activities or requires medication?",
  "In between periods, do you experience pelvic, abdominal, or lower back pain that limits your activities or requires medication?",
  "Are bowel movements painful before or during your period?",
  "Is sexual intercourse painful?",
  "Do you have fatigue, diarrhea, constipation, bloating, or nausea, especially during menstrual periods?",
];

const steps = [
  "Follow up appointment",
  "Transvarginal Ultrasound",
  "Pelvic MRI",
  "Prescribed painkillers",
  "Referral to pelvic floor therapy",
  "Hormonal birth control",
  "Consider diagnostic laproscopy",
];

const selectList = [
  "92% Endometriosis",
  "43% Adenomyosis",
  "11% Interstitial Cystitis",
  "6% Celiac Disease",
  "3% Pelvic Inflammatory Disease",
  "2% Pelvic Congestion Syndrome",
  "2% Irritable Bowel Disease",
  "1% Irritable Bowel Syndrome",
  "1% Sciatica",
  "<1% Uterine Fibroids",
  "<1% Polycystic Ovary Syndrome",
  "<1% Pelvic Adhesions",
  "<1% Fibromyalgia",
  "<1% Chronic Urinary Tract Infection",
  "<1% Crohn's Disease",
];

export default function PatientProfile({ params }) {
  const router = useRouter();
  const patient = getPatientList().find(({ id }) => id == params.id);

  const renderAccordionContent = () => {
    return (
      <div className="text-black">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <div className="flex-1">
            <div className="flex gap-3 items-center">
              <div className="w-12 h-12 rounded-full bg-main text-white text-xl items-center flex justify-center">
                92%
              </div>
              <h1 className="text-main text-xl font-semibold">Endometriosis</h1>
            </div>
            <div className="p-2 text-sm">
              <p>
                A disease characterized by the presence of endometrium-like
                epithelium and/or stroma outside the endometrium and myometrium,
                usually with an associated inflammatory process.
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
                  className="leading-10 relative flex items-center before:absolute before:w-8 before:h-8 before:content-[''] before:bg-[url(/check.svg)] before:bg-cover"
                >
                  <span className="ml-12 text-md">{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="p-2">
          <h2 className="font-semibold text-md mx-4 leading-10">
            Follow Up Questions
          </h2>
          <div className="">
            {questions.map((item, i) => (
              <p
                key={i}
                className="leading-8 relative flex before:absolute before:w-3 before:h-3 before:top-2.5 before:content-[''] before:bg-main before:rounded-full"
              >
                <span className="ml-12 text-md">{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="p-2">
          <h2 className="font-semibold text-md mx-4 leading-10">
            Recommended Next Steps
          </h2>
          <div className="">
            {steps.map((item, i) => (
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
    );
  };

  if (!patient) return <NotFound />;

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
              {patient.name}
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
                  <th>{patient.age}</th>
                  <th>{patient.dob}</th>
                  <th>{patient.location}</th>
                  <th>{patient.id}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {patient.generalHistory && (
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
                    <th className="align-baseline">
                      {patient.generalHistory.conditions.map((i) => (
                        <p key={i}>{i}</p>
                      ))}
                    </th>
                    <th className="align-baseline">
                      {patient.generalHistory.medications.map((i) => (
                        <p key={i}>{i}</p>
                      ))}
                    </th>
                    <th className="align-baseline">
                      {patient.generalHistory.allergies.join(", ")}
                    </th>
                    <th className="align-baseline">
                      {patient.generalHistory.familyHistory}
                    </th>
                    <th className="align-baseline">
                      {patient.generalHistory.liftStyle}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {patient.primaryConcerns && (
          <div className="max-w-4xl	mx-auto py-4">
            <div className="w-full">
              <h2 className="font-semibold m-4 text-xl leading-10 text-center text-main md:text-left">
                Primary Concerns
              </h2>
              <p className="mx-12 font-semibold text-md text-center md:text-left">
                {patient.primaryConcerns.join(", ")}
              </p>
            </div>
          </div>
        )}

        <div className="max-w-4xl	mx-auto py-4">
          <div className="w-full">
            <h2 className="font-semibold m-4 text-xl leading-10 text-center text-main md:text-left">
              Risk Results
            </h2>
            {selectList.map((item, i) => (
              <Accordion title={item} key={i}>
                {renderAccordionContent()}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
