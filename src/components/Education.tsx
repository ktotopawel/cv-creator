export default function Education() {
  const schools = [];
  return (
    <>
      <h2>Education</h2>
      <School></School>
    </>
  );
}

function School() {
  return (
    <>
      <form action="">
        <label htmlFor="schoolName">School name:</label>
        <input type="text" name="schoolName" id="schoolName" />
        <label htmlFor="field">Field of study:</label>
        <input type="text" name="field" id="field" />
        <label htmlFor="educationStart">Start:</label>
        <input type="month" name="educationStart" id="educationStart" />
        <label htmlFor="educationEnd">End:</label>
        <input type="month" name="educationEnd" id="educationEnd" />
      </form>
    </>
  );
}
