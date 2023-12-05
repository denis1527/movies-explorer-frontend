import { movies } from '../../utils/constants'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCards from "../MoviesCards/MoviesCards";
import './movies.css'

const Movies = () => {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCards cards={movies} biggerScreen={12} midScreen={8} smallScreen={5} />
    </section>
  )
}
export default Movies
