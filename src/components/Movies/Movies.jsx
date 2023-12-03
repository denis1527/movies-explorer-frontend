import React, { useContext, useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";
import Button from "../Button/Button";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import savedPageContext from "../../context/saved-page-context";

import "./Movies.css";

const allMovies = [
  {
    id: 1,
    title: "В погоне за Бенкси",
    duration: 27,
    imageUrl:
      "https://images.unsplash.com/photo-1647755370031-2bb9782f922a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "В погоне за Бенкси",
    duration: 27,
    imageUrl:
      "https://images.unsplash.com/photo-1647755370031-2bb9782f922a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "В погоне за Бенкси",
    duration: 27,
    imageUrl:
      "https://images.unsplash.com/photo-1647755370031-2bb9782f922a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "В погоне за Бенкси",
    duration: 27,
    imageUrl:
      "https://images.unsplash.com/photo-1647755370031-2bb9782f922a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "В погоне за Бенкси",
    duration: 27,
    imageUrl:
      "https://images.unsplash.com/photo-1647755370031-2bb9782f922a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    title: "В погоне за Бенкси",
    duration: 27,
    imageUrl:
      "https://images.unsplash.com/photo-1647755370031-2bb9782f922a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 7,
    title: "В погоне за Бенкси",
    duration:23,
    imageUrl:
        "https://images.unsplash.com/photo-1682685797332-e678a04f8a64?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "В погоне за Бенкси",
    duration: 25,
    imageUrl:
    "https://images.unsplash.com/photo-1701127749663-78686c12f8e1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function Movies() {
  const { setOnSavedPage } = useContext(savedPageContext);
  useEffect(() => setOnSavedPage(false), [setOnSavedPage]);

  return (
    <div className="movies-page">
      <Header />
      <Container>
        <section className="movies movies-page__movies" aria-label="Фильмы">
          <SearchForm />
          <MoviesCardList data={allMovies} onMainPage />
          <div className="movies__footer">
            <Button className="button_type_more">Ещё</Button>
          </div>
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default Movies;
