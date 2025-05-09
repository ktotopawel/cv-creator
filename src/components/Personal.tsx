import type { PersonalType, Setter } from "./types";

type FormProps = {
  personalData: PersonalType;
  setPersonalData: Setter<PersonalType>;
};

export default function Personal({ personalData, setPersonalData }: FormProps) {
  return (
    <>
      <h2>Personal Info</h2>
      <form action="">
        <div className="inputField">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={personalData.firstName}
            onChange={(e) =>
              setPersonalData({ ...personalData, firstName: e.target.value })
            }
          />
        </div>
        <div className="inputField">
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={personalData.lastName}
            onChange={(e) => {
              setPersonalData({ ...personalData, lastName: e.target.value });
            }}
          />
        </div>
        <div className="inputField">
          <label htmlFor="phoneNumber">Phone number:</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={personalData.phoneNumber}
            onChange={(e) =>
              setPersonalData({ ...personalData, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="inputField">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={personalData.email}
            onChange={(e) =>
              setPersonalData({ ...personalData, email: e.target.value })
            }
          />
        </div>
        <div className="inputField">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            value={personalData.location}
            onChange={(e) =>
              setPersonalData({ ...personalData, location: e.target.value })
            }
          />
        </div>
        <div className="inputField">
          <label htmlFor="jobTitle">Job title:</label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={personalData.jobTitle}
            onChange={(e) => {
              setPersonalData({ ...personalData, jobTitle: e.target.value });
            }}
          />
        </div>
        <div className="inputField">
          <label htmlFor="linkedInAddress">LinkedIn:</label>
          <input
            type="text"
            name="linkedInAddress"
            id="linkedInAddress"
            value={personalData.linkedInAddress}
            onChange={(e) => {
              setPersonalData({
                ...personalData,
                linkedInAddress: e.target.value,
              });
            }}
          />
        </div>
        <div className="inputField">
          <label htmlFor="portfolioAddress">Portfolio:</label>
          <input
            type="text"
            name="portfolioAddress"
            id="portfolioAddress"
            value={personalData.portfolioAddress}
            onChange={(e) => {
              setPersonalData({
                ...personalData,
                portfolioAddress: e.target.value,
              });
            }}
          />
        </div>
        <div className="inputField">
          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            value={personalData.summary}
            onChange={(e) => {
              setPersonalData({
                ...personalData,
                summary: e.target.value,
              });
            }}
          ></textarea>
        </div>
        <div className="inputField">
          <label htmlFor="softSkills">
            Soft skills: <span>(comma-separated list)</span>
          </label>
          <input
            type="text"
            name="softSkills"
            id="softSkills"
            value={personalData.softSkills.join(", ")}
            onChange={(e) => {
              setPersonalData({
                ...personalData,
                softSkills: e.target.value.split(", "),
              });
            }}
          />
        </div>
        <div className="inputField">
          <label htmlFor="hardSkills">
            Hard skills: <span>(comma-separated list)</span>
          </label>
          <input
            type="text"
            name="hardSkills"
            id="hardSkills"
            value={personalData.hardSkills.join(", ")}
            onChange={(e) => {
              setPersonalData({
                ...personalData,
                hardSkills: e.target.value.split(", "),
              });
            }}
          />
        </div>
        <div className="inputField">
          <label htmlFor="languages">
            Languages: <span>(comma-separated list)</span>
          </label>
          <input
            type="text"
            name="languages"
            id="languages"
            value={personalData.languages.join(", ")}
            onChange={(e) => {
              setPersonalData({
                ...personalData,
                languages: e.target.value.split(", "),
              });
            }}
          />
        </div>
      </form>
    </>
  );
}
