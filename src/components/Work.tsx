import type { Setter, WorkType } from "./types";

type WorkFormProps = {
  workplaces: WorkType[];
  setWorkplaces: Setter<WorkType[]>;
};

export default function Work({ workplaces, setWorkplaces }: WorkFormProps) {
  function addWorkplace() {
    const emptyWorkplace = {
      UUID: crypto.randomUUID(),
      workplace: "",
      position: "",
      responsibilities: "",
      workStart: "",
      workEnd: "",
    };
    setWorkplaces((prevWorkplaces) => [...prevWorkplaces, emptyWorkplace]);
    return emptyWorkplace;
  }

  return (
    <>
      <h2>Work experience</h2>
      {workplaces.map((workplace) => (
        <Workplace
          workplace={workplace}
          setWorkplaces={setWorkplaces}
          key={workplace.UUID}
        ></Workplace>
      ))}
      <button
        onClick={(e) => {
          e.preventDefault();
          addWorkplace();
        }}
      >
        + Add Work
      </button>
    </>
  );
}

type WorkplaceFormProps = {
  workplace: WorkType;
  setWorkplaces: Setter<WorkType[]>;
};

function Workplace({ workplace, setWorkplaces }: WorkplaceFormProps) {
  return (
    <>
      <form action="">
        <label htmlFor="workplace">Workplace:</label>
        <input
          type="text"
          name="workplace"
          id="workplace"
          value={workplace.workplace}
          onChange={(e) => {
            setWorkplaces((prevWorkplaces) =>
              prevWorkplaces.map((w) =>
                w.UUID === workplace.UUID
                  ? { ...w, workplace: e.target.value }
                  : w,
              ),
            );
          }}
        />
        <label htmlFor="position">Position:</label>
        <input type="text" name="position" id="position" />
        <label htmlFor="resp">Responsibilities:</label>
        <textarea name="resp" id="resp"></textarea>
        <label htmlFor="workStart">Start:</label>
        <input type="month" name="workStart" id="workStart" />
        <label htmlFor="workEnd">End:</label>
        <input type="month" name="workEnd" id="workEnd" />
      </form>
    </>
  );
}
