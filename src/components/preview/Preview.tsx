import type { PersonalType, SchoolType, WorkType } from "../types";
import Education from "./Education";
import Heading from "./Heading";
import Work from "./Work";

type FormProps = {
  personalData: PersonalType;
  schools: SchoolType[];
  workplaces: WorkType[];
};

export default function Preview({
  personalData: personalData,
  schools,
  workplaces,
}: FormProps) {
  return (
    <>
      <Heading personalData={personalData}></Heading>
      <Education schools={schools}></Education>
      <Work workplaces={workplaces}></Work>
    </>
  );
}
