const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const CLEAR = 'CLEAR';

const UPDATE = 'UPDATE';
const INIT = 'INIT';

const SHOW = 'SHOW';
const HIDE = 'HIDE';


export function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CLEAR].forEach((type) => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export function action(type, payload = {}) {
  return { type, payload };
}

export function buildObject(type) {
  return {
    request: args => action(type.REQUEST, { ...args }),
    success: (args, response) => action(type.SUCCESS, { ...args, response }),
    failure: (args, error) => action(type.FAILURE, { ...args, error }),
    clear: args => action(type.CLEAR, { ...args }),
  };
}

export function createFormTypes(base) {
  const res = {};

  [INIT, UPDATE, CLEAR].forEach((type) => {
    res[type] = `${base}_${type}`;
  });

  return res;
}

export function buildForm(type) {
  return {
    init: args => action(type.INIT, { ...args }),
    update: args => action(type.UPDATE, { ...args }),
    clear: args => action(type.CLEAR, { ...args }),
  };
}

export function createShowTypes(base) {
  const res = {};

  [SHOW, HIDE].forEach((type) => {
    res[type] = `${base}_${type}`;
  });

  return res;
}

export function buildShow(type) {
  return {
    show: args => action(type.SHOW, { ...args }),
    hide: args => action(type.HIDE, { ...args }),
  };
}
