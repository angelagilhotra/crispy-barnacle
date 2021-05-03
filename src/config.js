module.exports = {
  env: "staging",
  local: {
    domain: "http://localhost:3000"
  },
  staging: {
    domain: "https://api-kernel.herokuapp.com"
  },
  prod: {
    domain: "https://api.kernel.community"
  }
};
