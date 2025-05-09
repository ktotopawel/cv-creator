import type { SchoolType } from "../types";

type EducationProps = {
  schools: SchoolType[];
};

export default function Education({ schools }: EducationProps) {
  if (schools.length < 1) return false;

  return (
    <>
      <h2>Education</h2>
      <ul>
        {schools.map((school) => (
          <li key={school.UUID}>
            <h3>{school.schoolName}</h3>
            <p className="fieldDegree">
              <span>{school.field}</span> <span>{school.degree}</span>
            </p>
            <p className="fromTo">
              <span>{school.educationStart}</span>{" "}
              <span>{school.educationEnd}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
