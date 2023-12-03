import React from "react";
import Title from "../Title/Title";
import Container from "../Container/Container";
import Link from "../Link/Link";
import Project from "../Project/Project";
import photo from "../../images/avatar.jpeg";
import "./AboutMe.css";

const links = [
  {
    id: 1,
    title: "Github",
    url: "https://github.com/denis1527",
    modifier: "medium",
  },
  {
    id: 2,
    title: "Telegram",
    url: "https://t.me/ch_d1",
    modifier: "medium",
  },
];

const projects = [
  {
    id: 1,
    title: "Статичный сайт",
    url: "https://github.com/denis1527/how-to-learn",
  },
  {
    id: 2,
    title: "Адаптивный сайт",
    url: "https://github.com/denis1527/russian-travel",
  },
  {
    id: 3,
    title: "Одностраничное приложение",
    url: "https://github.com/denis1527/react-mesto-api-full-gha",
  },
];

const AboutMe = () => {
  return (
    <Container modifier="container_type_landing">
      <section className="about-me main__about-me" id="student">
        <Title title="Студент" />
        <div className="student about-me__student">
          <div className="student__information">
            <h3 className="student__name">Денис</h3>
            <p className="student__about">
              Студент, начинающий разработчик, 19 лет.
            </p>
            <p className="student__description">
              Я живу в двух городах: Ташкент (Узбекистан) и Калининград (Россия).
              Учусь в Калининграде, в БФУ им. Канта, на информационной безопасности.
              Мне нравится заниматься разработкой, помимо Web-разработки, учу C#.
              Мне очень нравится...
            </p>
            <ul className="student__socials">
              {links.map(({ id, ...link }) => (
                <Link key={id} {...link} />
              ))}
            </ul>
          </div>
          <img className="student__photo" src={photo} alt="Толя" />
        </div>
        <div className="portfolio">
          <h3 className="portfolio__title">Портфолио</h3>
          <ul className="portfolio__projects">
            {projects.map(({ id, ...project }) => (
              <Project key={id} {...project} />
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default AboutMe;
