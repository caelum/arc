var wsOptions = {
  alura: process.env.ALURA_URL,
  path: process.env.ALURA_PATH,
  hash: process.env.ALURA_HASH,

  courses: {
    module1: "php-mysql-e-fundamentos-da-web",
    module2: "php-mysql-e-fundamentos-da-web-parte-2"
  }
}

module.exports = wsOptions;