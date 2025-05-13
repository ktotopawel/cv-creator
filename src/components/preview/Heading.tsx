import type { PersonalType } from "../types";
import phoneIcon from "../../assets/phone.svg";
import atIcon from "../../assets/at-sign.svg";
import locationIcon from "../../assets/map-pin.svg";
import linkedInIcon from "../../assets/linkedin.svg";
import portfolioIcon from "../../assets/book-open.svg";

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
            {personalData.email !== "" && <span>{personalData.email}</span>}
            {personalData.location !== "" && (
              <span>{personalData.location}</span>
            )}
          </div>
        )}
        {(personalData.linkedInAddress !== "" ||
          personalData.portfolioAddress !== "") && (
          <div className="links">
            {personalData.linkedInAddress !== "" && (
              <span>
                <a href={personalData.linkedInAddress}>
                  {personalData.linkedInAddress}
                </a>
              </span>
            )}
            {personalData.portfolioAddress !== "" && (
              <span>
                <a href={personalData.portfolioAddress}>
                  {personalData.portfolioAddress}
                </a>
              </span>
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
