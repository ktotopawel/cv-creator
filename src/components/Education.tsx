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
      degree: "",
      educationStart: "",
      educationEnd: "",
    };
    setSchools((prevSchools) => [...prevSchools, emptySchool]);
    return emptySchool;
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
      <button onClick={addSchool}>+ Add School</button>
    </>
  );
}

type SchoolFormProps = {
  school: SchoolType;
  setSchools: Setter<SchoolType[]>;
};

function School({ school, setSchools }: SchoolFormProps) {
  function handleRemove() {
    setSchools((prevSchools) =>
      prevSchools.filter((s) => s.UUID !== school.UUID),
    );
  }

  return (
    <>
      <form action="">
        <div className="inputField">
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
        </div>
        <div className="inputField">
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
        </div>
        <div className="inputField">
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            name="degree"
            id="degree"
            value={school.degree}
            onChange={(e) => {
              setSchools((prevSchools) =>
                prevSchools.map((s) =>
                  s.UUID === school.UUID ? { ...s, degree: e.target.value } : s,
                ),
              );
            }}
          />
        </div>
        <div className="inputField">
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
        </div>
        <div className="inputField">
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
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleRemove();
          }}
        >
          Remove
        </button>
      </form>
    </>
  );
}
