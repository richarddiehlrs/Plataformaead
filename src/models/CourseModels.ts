import { Notes } from './AuthModels';

export interface CourseSeason {
    courseid: string;
    courseid_seasonid: string;
    description: string;
    position: number;
    seasonid: string;
    title: string;
}

export interface CourseSeasonMovieUser {
    courseid_seasonid_movieid_userid: string;
    movieid: string;
    courseid: string;
    seasonid: string;
    userid: string;
    videostatus: string;
    videowatched: string;
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
