module.exports = {
  environment: process.env.NODE_ENV || "dev",
  db_host: process.env.POSTGRES_HOST || "localhost",
  db_port: process.env.POSTGRES_PORT || "5432",
  db_username: process.env.POSTGRES_USER,
  db_password: process.env.POSTGRES_PASS,
  db_name: process.env.POSTGRES_DB,
  port: process.env.PORT || 3000,
};
