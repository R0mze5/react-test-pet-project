import { testAction } from '../exampleActions';

jest.mock('redux-actions');

it('test action', () => {
  expect(testAction).toBe('test data');
});
