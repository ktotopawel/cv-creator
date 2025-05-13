import { useState } from "react";
import Form from "./form/Form";
import "../styles/App.css";
import Preview from "./preview/Preview";
import type { PersonalType, SchoolType, WorkType } from "./types";
import Header from "./Header";

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
      <Header></Header>
      <div className="app">
        <div className="form">
          <Form
            personal={personalData}
            schools={schools}
            workplaces={workplaces}
            setPersonalData={setPersonalData}
            setSchools={setSchools}
            setWorkplaces={setWorkplaces}
          ></Form>
        </div>
        <div className="preview">
          <Preview
            personalData={personalData}
            schools={schools}
            workplaces={workplaces}
          ></Preview>
        </div>
      </div>
    </>
  );
}
