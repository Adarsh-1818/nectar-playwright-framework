module.exports = {
    validUser: {
      username: process.env.TEST_USERNAME || 'standard_user',
      password: process.env.TEST_PASSWORD || 'secret_sauce',
    },
  
    invalidUser: {
      username: "wrong_user",
      password: "wrong_pass"
    }
  };