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
      location: "",
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
  function handleRemove() {
    setWorkplaces((prevWorkplaces) =>
      prevWorkplaces.filter((w) => w.UUID !== workplace.UUID),
    );
  }

  return (
    <>
      <form action="">
        <div className="inputField">
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
        </div>
        <div className="inputField">
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            name="position"
            id="position"
            value={workplace.position}
            onChange={(e) => {
              setWorkplaces((prevWorkplaces) =>
                prevWorkplaces.map((w) =>
                  w.UUID === workplace.UUID
                    ? { ...w, position: e.target.value }
                    : w,
                ),
              );
            }}
          />
        </div>
        <div className="inputField">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            value={workplace.location}
            onChange={(e) => {
              setWorkplaces((prevWorkplaces) =>
                prevWorkplaces.map((w) =>
                  w.UUID === workplace.UUID
                    ? { ...w, location: e.target.value }
                    : w,
                ),
              );
            }}
          />
        </div>
        <div className="inputField">
          <label htmlFor="resp">Responsibilities:</label>
          <textarea
            name="resp"
            id="resp"
            value={workplace.responsibilities}
            onChange={(e) => {
              setWorkplaces((prevWorkplaces) =>
                prevWorkplaces.map((w) =>
                  w.UUID === workplace.UUID
                    ? { ...w, responsibilities: e.target.value }
                    : w,
                ),
              );
            }}
          ></textarea>
        </div>
        <div className="inputField">
          <label htmlFor="workStart">Start:</label>
          <input
            type="month"
            name="workStart"
            id="workStart"
            value={workplace.workStart}
            onChange={(e) => {
              setWorkplaces((prevWorkplaces) =>
                prevWorkplaces.map((w) =>
                  w.UUID === workplace.UUID
                    ? { ...w, workStart: e.target.value }
                    : w,
                ),
              );
            }}
          />
        </div>
        <div className="inputField">
          <label htmlFor="workEnd">End:</label>
          <input
            type="month"
            name="workEnd"
            id="workEnd"
            value={workplace.workEnd}
            onChange={(e) => {
              setWorkplaces((prevWorkplaces) =>
                prevWorkplaces.map((w) =>
                  w.UUID === workplace.UUID
                    ? { ...w, workEnd: e.target.value }
                    : w,
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
