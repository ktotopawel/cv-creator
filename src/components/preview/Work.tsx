import type { WorkType } from "../types";

type WorkProps = {
  workplaces: WorkType[];
};

export default function Work({ workplaces }: WorkProps) {
  if (workplaces.length < 1) return false;
  return (
    <>
      <h2>Work Experience</h2>
      <ul>
        {workplaces.map((workplace) => (
          <li key={workplace.UUID}>
            <h3>
              {workplace.workplace} <span>{workplace.location}</span>
            </h3>
            <p className="position">{workplace.position}</p>
            <p className="responsibilities">{workplace.responsibilities}</p>
            <p className="fromTo">
              <span>{workplace.workStart}</span>{" "}
              <span>{workplace.workEnd}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
