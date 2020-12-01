import Notes from './Notes';
import CourseSeasonMovieUser from './CourseSeasonMovieUser';

export default interface CourseSeasonMovie {
  courseid_seasonid_movieid: string;
  title: string;
  description: string;
  movieid: string;
  courseid: string;
  seasonid: string;
  url: string;
  thumb: string;
  videotype: string;
  videoduration: string;
  exerciseshortmessage: string;
  position: number;
  courseseasonmovieuser: CourseSeasonMovieUser;
  notes: Array<Notes>;
  exercises: [];
}
