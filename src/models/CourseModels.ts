import Notes from './Notes';
import CourseSeasonMovieUser from './CourseSeasonMovieUser';

export interface CourseSeason {
    courseid: string;
    courseid_seasonid: string;
    description: string;
    position: number;
    seasonid: string;
    title: string;
}

export interface CourseSeasonMovie {
    courseid: string;
    courseid_seasonid_movieid: string;
    movieid: string;
    seasonid: string;
    title: string;
    description: string;
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

export interface Course {
    courseid: string;
    title: string;
    description: string;
    thumburl: string;
    levelidlist: string;
    priority: number;
    currenttoprankingposition: number;
  }
