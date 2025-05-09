export type PersonalType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  jobTitle: string;
  linkedInAddress: string;
  portfolioAddress: string;
  location: string;
  softSkills: string[];
  hardSkills: string[];
  languages: string[];
};

export type SchoolType = {
  UUID: string;
  schoolName: string;
  field: string;
  degree: string;
  educationStart: string;
  educationEnd: string;
};

export type WorkType = {
  UUID: string;
  workplace: string;
  position: string;
  location: string;
  responsibilities: string;
  workStart: string;
  workEnd: string;
};

export type Setter<type> = React.Dispatch<React.SetStateAction<type>>;
