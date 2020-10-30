import Movies from './Movies';

export default interface Category {
  id: string;
  movies: Array<Movies>;
  position: number;
  title: string;
}
