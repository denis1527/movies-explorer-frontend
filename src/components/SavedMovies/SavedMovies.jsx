import React from 'react'
import SearchForm from "../SearchForm/SearchForm";
import { movies } from "../../utils/constants";
import MoviesCards from "../MoviesCards/MoviesCards";
import './saved-movies.css'

const SavedMovies = () => {
  return (
    <section className='saved-movies'>
      <SearchForm />
      <MoviesCards cards={movies} biggerScreen={3} midScreen={3} smallScreen={2} />
    </section>
  )
}
export default SavedMovies
