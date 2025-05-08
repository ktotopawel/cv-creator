export default function Work() {
  return (
    <>
      <h2>Work experience</h2>
      <Workplace></Workplace>
    </>
  );
}

function Workplace() {
  return (
    <>
      <form action="">
        <label htmlFor="workplace">Workplace:</label>
        <input type="text" name="workplace" id="workplace" />
        <label htmlFor="position">Position:</label>
        <input type="text" name="position" id="position" />
        <label htmlFor="resp">Responsibilities:</label>
        <textarea name="resp" id="resp"></textarea>
        <label htmlFor="workStart">Start:</label>
        <input type="month" name="workStart" id="workStart" />
        <label htmlFor="workEnd">End:</label>
        <input type="month" name="workEnd" id="workEnd" />
      </form>
    </>
  );
}
