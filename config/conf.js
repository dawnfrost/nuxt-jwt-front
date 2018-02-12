module.exports = {
  service: {// nodejs express 服务地址
    host: process.env.SERVICE_HOST || '0.0.0.0',
    port: process.env.SERVICE_PORT || '7780',
    path: process.env.SERVICE_PATH || '/xgo'
  },
  axios: {
    baseURL: process.env.AXIOS_BASE_URL || 'http://localhost:7780/xgo'
  }
};
