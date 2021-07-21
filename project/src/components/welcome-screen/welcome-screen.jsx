import React, { useEffect } from 'react';
import MainFilm from '../films/main-film';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import Genres from '../genres/genres';
import ShowMore from '../show-more/show-more';
import { genreChange, addFilms, resetFilms } from '../../store/action';
import { useSelector, useDispatch } from 'react-redux';

import { getAuthorizationStatus } from '../../store/user/selectors';
import { getFilms, getGenre, getFilmsListAmount } from '../../store/films-data/selectors';

function WelcomeScreen() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const films = useSelector(getFilms);
  const filmsListAmount = useSelector(getFilmsListAmount);
  const genre = useSelector(getGenre);
  const dispatch = useDispatch();

  // eslint-disable-next-line
  useEffect(() => {
    return () => {
      dispatch(resetFilms());
    };
  }, [dispatch]);

  const onShowMoreClick = () => {
    dispatch(addFilms(filmsListAmount));
  };

  const onGenreClick = (filmGenre) => {
    dispatch(genreChange(filmGenre));
  };

  return (
    <div className="page-content">
      <MainFilm authorizationStatus={authorizationStatus} films={films} />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Genres films={films} genre={genre} onGenreClick={onGenreClick} />

        <FilmsList films={films} genre={genre} filmsListAmount={filmsListAmount} />

        {films.length > filmsListAmount ? <ShowMore filmsListAmount={filmsListAmount} onShowMoreClick={onShowMoreClick} /> : ''}
      </section>

      <Footer />
    </div>
  );
}

export default WelcomeScreen;
