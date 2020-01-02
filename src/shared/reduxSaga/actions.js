import { createAction } from 'redux-actions';

export const getXkcdImageRequest = createAction('XKCD/IMAGE_REQUEST');
export const getXkcdImageStart = createAction('XKCD/IMAGE_START');
export const getXkcdImageSuccess = createAction('XKCD/IMAGE_SUCCESS');
export const getXkcdImageFailure = createAction('XKCD/IMAGE_FAILURE');
