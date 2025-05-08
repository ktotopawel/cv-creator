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
      </form>
    </>
  );
}
