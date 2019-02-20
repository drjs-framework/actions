module.exports = {
  verbose: true,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[j,t]sx?$',
  roots: [
    '<rootDir>/__tests__/',
  ],
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
};
