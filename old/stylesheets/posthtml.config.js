module.exports = {
    plugins: {
      "posthtml-expressions": {
        locals: {
          API_TOKEN: process.env.API_TOKEN
        }
      }
    }
  };