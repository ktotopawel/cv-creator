export type PersonalType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export type SchoolType = {
  UUID: string;
  schoolName: string;
  field: string;
  educationStart: string;
  educationEnd: string;
};

export type WorkType = {
  workplace: string;
  position: string;
  responsibilities: string;
  workStart: string;
  workEnd: string;
};

export type Setter<type> = React.Dispatch<React.SetStateAction<type>>;
