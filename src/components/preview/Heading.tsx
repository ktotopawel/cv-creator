import type { PersonalType } from "../types";

type HeadingProps = {
  personalData: PersonalType;
};

export default function Heading({ personalData }: HeadingProps) {
  return (
    <>
      <div className="heading">
        {personalData.jobTitle !== "" && <h2>{personalData.jobTitle}</h2>}
        <h1>
          {personalData.firstName !== "" && (
            <span>{personalData.firstName} </span>
          )}
          {personalData.lastName !== "" && (
            <span>{personalData.lastName} </span>
          )}
        </h1>
        {(personalData.phoneNumber !== "" ||
          personalData.email !== "" ||
          personalData.location !== "") && (
          <div className="contact">
            {personalData.phoneNumber !== "" && (
              <span>{personalData.phoneNumber}</span>
            )}
            {personalData.location !== "" && (
              <span>{personalData.location}</span>
            )}
          </div>
        )}
        {(personalData.linkedInAddress !== "" ||
          personalData.portfolioAddress !== "") && (
          <div className="links">
            {personalData.linkedInAddress !== "" && (
              <span>{personalData.linkedInAddress}</span>
            )}
            {personalData.portfolioAddress !== "" && (
              <span>{personalData.portfolioAddress}</span>
            )}
          </div>
        )}
      </div>
      {personalData.summary !== "" && (
        <p className="summary">{personalData.summary}</p>
      )}
    </>
  );
}
