import Movies from './Movies';

export default interface Category {
  title: string;
  id: string;
  position: number;
  type: string;
  movies: Array<Movies>;
};
