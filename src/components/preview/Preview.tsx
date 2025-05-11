import type { PersonalType, SchoolType, WorkType } from "../types";
import Education from "./Education";
import Heading from "./Heading";
import Skills from "./Skills";
import Work from "./Work";
import "../../styles/Preview.css";

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
      <div className="previewContent">
        <Education schools={schools}></Education>
        <Work workplaces={workplaces}></Work>
        <Skills
          softSkills={personalData.softSkills}
          hardSkills={personalData.hardSkills}
          languages={personalData.languages}
        ></Skills>
      </div>
    </>
  );
}
