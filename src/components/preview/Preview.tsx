import type { PersonalType, SchoolType, WorkType } from "../types";
import Education from "./Education";
import Heading from "./Heading";
import Skills from "./Skills";
import Work from "./Work";
import "../../styles/Preview.css";
import { usePDF } from "react-to-pdf";
import downloadIcon from "../../assets/download.svg";

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
  const { toPDF, targetRef } = usePDF({
    filename: `${personalData.firstName.toLowerCase()}-${personalData.lastName.toLowerCase()}.pdf`,
  });

  return (
    <>
      <button onClick={() => toPDF()} className="downloadBtn">
        <img src={downloadIcon} alt="download" />
      </button>
      <div ref={targetRef}>
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
      </div>
    </>
  );
}
