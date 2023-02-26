
const Env = require('./next.config.js');

const isProd = process.env.NODE_ENV === 'production';

const Setting = {
  title: '🦖 simple-base64 🦖',
  isProd,
  basePath: Env.basePath,
};

export default Setting;
