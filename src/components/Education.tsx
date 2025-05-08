import type { SchoolType, Setter } from "./types";

type EducationFormProps = {
  schools: SchoolType[];
  setSchools: Setter<SchoolType[]>;
};

export default function Education({ schools, setSchools }: EducationFormProps) {
  function addSchool() {
    const emptySchool = {
      UUID: crypto.randomUUID(),
      schoolName: "",
      field: "",
      educationStart: "",
      educationEnd: "",
    };
    schools.push(emptySchool);
    return emptySchool;
  }

  if (schools.length < 1) {
    addSchool();
  }

  return (
    <>
      <h2>Education</h2>
      {Array.from(schools.values()).map((school) => (
        <School
          key={school.UUID}
          school={school}
          setSchools={setSchools}
        ></School>
      ))}
    </>
  );
}

type SchoolFormProps = {
  school: SchoolType;
  setSchools: Setter<SchoolType[]>;
};

function School({ school, setSchools }: SchoolFormProps) {
  return (
    <>
      <form action="">
        <label htmlFor="schoolName">School name:</label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          value={school.schoolName}
          onChange={(e) => {
            setSchools((prevSchools) =>
              prevSchools.map((s) =>
                s.UUID === school.UUID
                  ? { ...s, schoolName: e.target.value }
                  : s,
              ),
            );
          }}
        />
        <label htmlFor="field">Field of study:</label>
        <input
          type="text"
          name="field"
          id="field"
          value={school.field}
          onChange={(e) => {
            setSchools((prevSchools) =>
              prevSchools.map((s) =>
                s.UUID === school.UUID ? { ...s, field: e.target.value } : s,
              ),
            );
          }}
        />
        <label htmlFor="educationStart">Start:</label>
        <input
          type="month"
          name="educationStart"
          id="educationStart"
          value={school.educationStart}
          onChange={(e) => {
            setSchools((prevSchools) =>
              prevSchools.map((s) =>
                s.UUID === school.UUID
                  ? { ...s, educationStart: e.target.value }
                  : s,
              ),
            );
          }}
        />
        <label htmlFor="educationEnd">End:</label>
        <input
          type="month"
          name="educationEnd"
          id="educationEnd"
          value={school.educationEnd}
          onChange={(e) => {
            setSchools((prevSchools) =>
              prevSchools.map((s) =>
                s.UUID === school.UUID
                  ? { ...s, educationEnd: e.target.value }
                  : s,
              ),
            );
          }}
        />
      </form>
    </>
  );
}
