import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './movies-cards.css';

const MoviesCards = ({ cards, biggerScreen, midScreen, smallScreen }) => {
    const baseURL = 'https://api.nomoreparties.co';

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());

    useEffect(() => {
        function handleResize() {
            setCardsPerPage(getCardsPerPage());
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function getCardsPerPage() {
        if (window.innerWidth > 768) {
            return biggerScreen;
        } else if (window.innerWidth <= 768 && window.innerWidth > 320) {
            return midScreen;
        } else {
            return smallScreen;
        }
    }

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    const handlePageChange = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className="movies-cards__wrapper">
            <div className="movies-cards__container">
                {currentCards.map((card) => (
                    <MoviesCard
                        savedMovies={card.savedMovies}
                        key={card.id}
                        title={card.nameRU}
                        duration={card.duration}
                        poster={`${baseURL}/${card.image.url}`}
                        id={card.id}
                    />
                ))}
            </div>
            <button
                className="movies-cards__btn-more"
                type="button"
                onClick={handlePageChange}
                style={{
                    visibility:
                        (cardsPerPage >= 12 && biggerScreen) ||
                        (cardsPerPage >= 8 && midScreen) ||
                        (cardsPerPage >= 5 && smallScreen)
                            ? 'visible'
                            : 'hidden',
                }}
            >
                Ещё
            </button>
        </div>
    );
};

export default MoviesCards;
