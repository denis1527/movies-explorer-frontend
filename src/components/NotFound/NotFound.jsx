import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();
  const backHandler = () => navigate(-1);

  return (
      <section className="not-found">
        <div className="not-found__content">
          <div className="not-found__text">
            <p className="not-found__error">404</p>
            <h2 className="not-found__title">Страница не найдена</h2>
          </div>
          <Button className="not-found__back" handler={backHandler}>
            Назад
          </Button>
        </div>
      </section>
  );
}

export default NotFound;

