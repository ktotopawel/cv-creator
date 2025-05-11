import listPoint from "../../assets/chevron-right.svg";

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
    <div className="skills">
      {softSkills.length > 0 && (
        <div className="softSkills">
          <h3>Soft skills:</h3>
          <SkillsSect skills={softSkills}></SkillsSect>
        </div>
      )}
      {hardSkills.length > 0 && (
        <div className="hardSkills">
          <h3>Hard skills:</h3>
          <SkillsSect skills={hardSkills}></SkillsSect>
        </div>
      )}
      {languages.length > 0 && (
        <div className="languages">
          <h3>Languages:</h3>
          <SkillsSect skills={languages}></SkillsSect>
        </div>
      )}
    </div>
  );
}

type SkillsSectProps = {
  skills: string[];
};

function SkillsSect({ skills }: SkillsSectProps) {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skills.indexOf(skill)}>
          <img src={listPoint} alt="" />
          {skill}
        </li>
      ))}
    </ul>
  );
}
