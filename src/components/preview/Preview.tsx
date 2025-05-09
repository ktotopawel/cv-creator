import type { PersonalType, SchoolType, WorkType } from "../types";
import Heading from "./Heading";

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
    </>
  );
}
