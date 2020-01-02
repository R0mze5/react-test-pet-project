import { createSelector } from 'reselect';

export const getIsLoading = state => state.reduxThunk.isLoading;

export const getSeries = createSelector(
  state => state.reduxThunk.series,
  series =>
    series.map(ep => ({
      id: ep.id,
      name: ep.name,
      image: ep.image.original,
      summary: ep.summary,
    })),
);

export const getError = state => state.reduxThunk.error;
