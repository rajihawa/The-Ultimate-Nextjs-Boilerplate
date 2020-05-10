module.exports = {
  env: {
    backend:
      process.env.NODE_ENV == "development"
        ? "http://localhost:4000"
        : "https://domain.com",
    wslink:
      process.env.NODE_ENV == "development"
        ? "ws://localhost:4000"
        : "wss://domain.com",
  },
};
