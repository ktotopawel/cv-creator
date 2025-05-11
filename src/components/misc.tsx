import chevron from "../assets/chevron-left.svg";
import "../styles/misc.css";
import type { PersonalType, SchoolType, Setter, WorkType } from "./types";

type HideBtnProps = {
  isHidden: boolean;
  setIsHidden: (isHidden: boolean) => void;
};

export function HideBtn({ isHidden, setIsHidden }: HideBtnProps) {
  function handleHiding() {
    setIsHidden(!isHidden);
  }
  return (
    <button
      onClick={() => {
        handleHiding();
      }}
      className={`chevron ${isHidden ? "show" : "hide"}`}
    >
      <img src={chevron} alt="chevron icon" />
    </button>
  );
}

type WipeBtnProps = {
  setPersonalData: Setter<PersonalType>;
  setSchools: Setter<SchoolType[]>;
  setWorkplaces: Setter<WorkType[]>;
};

export function WipeBtn({
  setPersonalData,
  setSchools,
  setWorkplaces,
}: WipeBtnProps) {
  function eraseData() {
    setPersonalData({
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
    setSchools([]);
    setWorkplaces([]);
  }

  return (
    <button className="eraseBtn" onClick={eraseData}>
      ERASE DATA
    </button>
  );
}
