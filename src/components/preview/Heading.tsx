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
              <span>
                <img src={phoneIcon} alt="" />
                {personalData.phoneNumber}
              </span>
            )}
            {personalData.email !== "" && (
              <span>
                <img src={atIcon} alt="" />
                {personalData.email}
              </span>
            )}
            {personalData.location !== "" && (
              <span>
                <img src={locationIcon} alt="" />
                {personalData.location}
              </span>
            )}
          </div>
        )}
        {(personalData.linkedInAddress !== "" ||
          personalData.portfolioAddress !== "") && (
          <div className="links">
            {personalData.linkedInAddress !== "" && (
              <span>
                <img src={linkedInIcon} alt="" />
                {personalData.linkedInAddress}
              </span>
            )}
            {personalData.portfolioAddress !== "" && (
              <span>
                <img src={portfolioIcon} alt="" />
                {personalData.portfolioAddress}
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
