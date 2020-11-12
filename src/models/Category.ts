import Course from './Course';

export default interface Category {
  title: string;
  id: string;
  position: number;
  type: string;
  courses: Array<Course>;
}
