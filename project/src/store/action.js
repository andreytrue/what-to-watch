export const ActionType = {
  GENRE_CHANGE: 'genres/genreChange',
  RESET_GENRE: 'genres/genreReset',
  ADD_FILMS: 'films/addFilms',
  RESET_FILMS: 'films/resetFilms',
};

export const ActionCreator = {
  genreChange: (genre) => ({
    type: ActionType.GENRE_CHANGE,
    payload: genre,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  }),
  addFilms: (filmsListAmount) => ({
    type: ActionType.ADD_FILMS,
    payload: filmsListAmount,
  }),
  resetFilms: () => ({
    type: ActionType.RESET_FILMS,
  }),
};