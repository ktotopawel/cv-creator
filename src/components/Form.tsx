import Education from "./Education";
import Personal from "./Personal";
import type { PersonalType, SchoolType, WorkType } from "./types";
import Work from "./Work";

type FormProps = {
  personal: PersonalType;
  schools: SchoolType[];
  workplaces: WorkType[];
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalType>>;
  setSchools: React.Dispatch<React.SetStateAction<SchoolType[]>>;
  setWorkplaces: React.Dispatch<React.SetStateAction<WorkType[]>>;
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
