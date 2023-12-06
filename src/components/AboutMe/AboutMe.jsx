import React from 'react';
import image from '../../assets/images/about-me/avatar.jpeg';
import './about-me.css';

const ContentText = () => {
    return (
        <div className="content__text">
            <h4 className='content_name'>Денис</h4>
            <h5 className='content_about'>Студент, начинающий разработчик, 19 лет.</h5>
            <p className="content_text">
                Я живу в двух городах: Ташкент (Узбекистан) и Калининград (Россия).
                Учусь в Калининграде, в БФУ им. Канта, на информационной безопасности.
                Мне нравится заниматься разработкой, помимо Web-разработки, учу C#.
                Мне очень нравится...
            </p>
            <a
                href='https://github.com/denis1527'
                target='_blank'
                className="content_link"
                rel="noreferrer"
            >
                GitHub
            </a>
        </div>
    );
}

const AboutMe = () => {
    return (
        <section className='about-me'>
            <div className="about-me__wrapper">
                <div className="about-me__heading">
                    <h3>Студент</h3>
                </div>

                <div className="about-me__content content">
                    <ContentText />
                    <img src={image} alt="Аватар изорабжения" className="content__image roll-in-right"/>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;

