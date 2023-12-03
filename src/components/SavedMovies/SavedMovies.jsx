import React, { useContext, useEffect } from "react";

import Container from "../Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import savedPageContext from "../../context/saved-page-context";
import "./SavedMovies.css";

const savedMovies = [
  {
    id: 1,
    title: "В погоне за Бенкси",
    duration: 23,
    imageUrl:
      "https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "В погоне за Бенкси",
    duration:23,
    imageUrl:
"https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
  {
    id: 3,
    title: "В погоне за Бенкси",
    duration: 25,
    imageUrl:
        "https://images.unsplash.com/photo-1701127749663-78686c12f8e1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function SavedMovies() {
  const { onSavedPage, setOnSavedPage } = useContext(savedPageContext);
  useEffect(() => setOnSavedPage(true), [setOnSavedPage]);

  return (
    <div className="saved-movies-page">
      <Header />
      <Container>
        <section
          className="movies saved-movies-page__movies"
          aria-label="Сохраненные фильмы"
        >
          <SearchForm />
          <MoviesCardList data={savedMovies} onSavedPage={onSavedPage} />
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default SavedMovies;
