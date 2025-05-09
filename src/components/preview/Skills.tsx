type SkillsProps = {
  softSkills: string[];
  hardSkills: string[];
  languages: string[];
};

export default function Skills({
  softSkills,
  hardSkills,
  languages,
}: SkillsProps) {
  return (
    <>
      {softSkills.length > 0 && (
        <>
          <h3>Soft skills:</h3>
          <SkillsSect skills={softSkills}></SkillsSect>
        </>
      )}
      {hardSkills.length > 0 && (
        <>
          <h3>Hard skills:</h3>
          <SkillsSect skills={hardSkills}></SkillsSect>
        </>
      )}
      {languages.length > 0 && (
        <>
          <h3>Languages:</h3>
          <SkillsSect skills={languages}></SkillsSect>
        </>
      )}
    </>
  );
}

type SkillsSectProps = {
  skills: string[];
};

function SkillsSect({ skills }: SkillsSectProps) {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skills.indexOf(skill)}>{skill}</li>
      ))}
    </ul>
  );
}
