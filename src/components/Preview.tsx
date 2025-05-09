import { Fragment } from "react/jsx-runtime";
import type { PersonalType, SchoolType, WorkType } from "./types";

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
      <div>
        <h1>Curriculum Vitae</h1>
        <h2>
          {personalData.firstName} {personalData.lastName}
        </h2>
        <p>
          Phone number: {personalData.phoneNumber} Email Address:{" "}
          {personalData.email}
        </p>
        <h2>Schools:</h2>
        {schools.map((school) => {
          return (
            <Fragment key={school.UUID}>
              <h3>Schoolname:</h3>
              <p>{school.schoolName}</p>
            </Fragment>
          );
        })}
        <h2>Workplaces</h2>
        {workplaces.map((workplace) => {
          return (
            <Fragment key={workplace.UUID}>
              <h3>Workplace Name:</h3>
              <p>{workplace.workplace}</p>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
