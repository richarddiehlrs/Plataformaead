export interface SchoolLevel{
  schoolid: string;
  levelid: string;
  title: string;
  position: number;
}

export interface SchoolLevelSubject{
  schoolid: string;
  levelid: string;
  subjectid: string;
  seasonid: string;
  title: string;
  description: string;
  position: number;
  schoollevelsubjectseasonclasses: Array<any>;
}

export interface SchoolLevelSubjectSeasonClasses{
  classid: string;
  description: string;
  exercises: Array<any>;
  exerciseshortmessage: string;
  levelid: string;
  notes: Array<any>;
  position: number;
  schoolid: string;
  seasonid: string;
  subjectid: string;
  thumb: string;
  title: string;
  url: string;
  videoduration: string;
  videotype: string;
}
