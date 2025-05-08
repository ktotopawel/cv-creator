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
        <p>SchoolName: {schools[0].schoolName}</p>
      </div>
    </>
  );
}
