module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ['standard'],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
