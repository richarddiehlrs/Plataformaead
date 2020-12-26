import { Course } from './CourseModels';

export interface Category {
  title: string;
  id: string;
  position: number;
  type: string;
  courses: Array<Course>;
}

export interface User {
    userid: string;
    fullname: string;
    username: string;
    levelid: string;
    roomid: string;
    imageurl: string;
    schoolid: string;
    schoolName: string;
    schoolCity: string;
}

export interface Notes {
    courseid_seasonid_movieid_userid_noteid: string;
    message: string;
    movieid: string;
    courseid: string;
    seasonid: string;
    userid: string;
    noteid: string;
}
