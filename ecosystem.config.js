module.exports = {
  apps: [
    {
      name: 'typescriptExpress',
      script: './dist/index.js',
      instances: 0,
      exec_mode: 'cluster',
    },
  ],
};
