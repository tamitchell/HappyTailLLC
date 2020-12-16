module.exports = {
    plugins: {
      "posthtml-expressions": {
        locals: {
          API_TOKEN: process.env.API_TOKEN,
          COMPANY_EMAIL: process.env.COMPANY_EMAIL
        }
      }
    }
  };