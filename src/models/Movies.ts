export default interface Movies {
  movieid: string;
  title: string;
  description: string;
  thumburl: string;
  levelidlist: string;
  priority: number;
  currenttoprankingposition: number;
  movieseasons: Array<{
    movieid_seasonid: string;
    movieid: string;
    seasonid: string;
    position: number;
    movieseasonclass: Array<{
      movieid_seasonid_classid: string;
      movieid: string;
      classid: string;
      seasonid: string;
      position: number;
      exercises: Array<{
        movieid_seasonid_classid_exerciseid: string;
        movieid: string;
        classid: string;
        seasonid: string;
        position: number;
      }>;
    }>;
  }>;
};
