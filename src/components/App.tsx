import { useState } from "react";
import Form from "./form/Form";
import "../styles/App.css";
import Preview from "./preview/Preview";
import type { PersonalType, SchoolType, WorkType } from "./types";

export default function App() {
  const [personalData, setPersonalData] = useState<PersonalType>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    jobTitle: "",
    linkedInAddress: "",
    portfolioAddress: "",
    location: "",
    softSkills: [],
    hardSkills: [],
    languages: [],
    summary: "",
  });

  const [schools, setSchools] = useState<SchoolType[]>([]);
  const [workplaces, setWorkplaces] = useState<WorkType[]>([]);

  return (
    <>
      <Form
        personal={personalData}
        schools={schools}
        workplaces={workplaces}
        setPersonalData={setPersonalData}
        setSchools={setSchools}
        setWorkplaces={setWorkplaces}
      ></Form>
      <Preview
        personalData={personalData}
        schools={schools}
        workplaces={workplaces}
      ></Preview>
    </>
  );
}
