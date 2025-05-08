import Education from "./Education";
import Personal from "./Personal";
import type { PersonalType, SchoolType, Setter, WorkType } from "./types";
import Work from "./Work";

type FormProps = {
  personal: PersonalType;
  schools: SchoolType[];
  workplaces: WorkType[];
  setPersonalData: Setter<PersonalType>;
  setSchools: Setter<SchoolType[]>;
  setWorkplaces: Setter<WorkType[]>;
};

export default function Form({
  personal: personalData,
  schools,
  workplaces,
  setPersonalData,
  setSchools,
  setWorkplaces,
}: FormProps) {
  return (
    <>
      <Personal
        personalData={personalData}
        setPersonalData={setPersonalData}
      ></Personal>
      <Education schools={schools} setSchools={setSchools}></Education>
      <Work workplaces={workplaces} setWorkplaces={setWorkplaces}></Work>
    </>
  );
}
