import { createSelector } from 'reselect';

export const getIsLoading = state => state.middlewares.isLoading;
// export const getSeries = state =>
//   state.middlewares.series.map(ep => ({
//     id: ep.id,
//     name: ep.name,
//     image: ep.image.original,
//     summary: ep.summary,
//   }));
export const getSeries = createSelector(
  state => state.middlewares.series,
  series =>
    series.map(ep => ({
      id: ep.id,
      name: ep.name,
      image: ep.image.original,
      summary: ep.summary,
    })),
);

export const getError = state => state.middlewares.error;

// export const getSeries = createSelector(
//   [state => state.middlewares.series, state => getError(state)],
//   ([series, errors]) =>
//     series.map(ep => ({
//       id: ep.id,
//       name: ep.name,
//       image: ep.image.original,
//       summary: ep.summary,
//     })),
// );
