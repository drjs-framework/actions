import { createRequestTypes, buildObject } from '../actionHelper';

const typesTest = {
  REQUEST: 'TEST_REQUEST',
  SUCCESS: 'TEST_SUCCESS',
  FAILURE: 'TEST_FAILURE',
  CLEAR: 'TEST_CLEAR',
};

describe('actionHelpers', () => {
  describe('createRequestTypes', () => {
    it('Should return a object with correct props', () => {
      expect(createRequestTypes('TEST')).toEqual(typesTest);
    });
  });
  describe('buildObject', () => {
    it('Should return functions for all types', () => {
      const typesFunctions = buildObject(typesTest);
      expect(typeof typesFunctions.request).toEqual('function');
      expect(typesFunctions.request({ test: 'value' }))
        .toEqual({
          type: 'TEST_REQUEST', payload: { test: 'value' },
        });

      expect(typesFunctions.success({ test: 'value' }, 'response'))
        .toEqual({
          type: 'TEST_SUCCESS',
          payload: {
            test: 'value',
            response: 'response',
          },
        });

      expect(typesFunctions.failure({ test: 'value' }, 'error'))
        .toEqual({
          type: 'TEST_FAILURE',
          payload: {
            test: 'value',
            error: 'error',
          },
        });

      expect(typesFunctions.clear({ test: 'value' }))
        .toEqual({
          type: 'TEST_CLEAR',
          payload: {
            test: 'value',
          },
        });
    });
  });
});
