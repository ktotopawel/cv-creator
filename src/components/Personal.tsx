import type { PersonalType } from "./types";

export default function Personal({
  firstName,
  lastName,
  phoneNumber,
  email,
}: PersonalType) {
  return (
    <>
      <h2>Personal Info</h2>
      <form action="">
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" name="firstName" value={firstName} />
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" name="lastName" value={lastName} />
        <label htmlFor="phoneNumber">Phone number:</label>
        <input type="tel" name="phoneNumber" id="phoneNumber" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </form>
    </>
  );
}
