const config = {
  port: process.env.PORT || 3000,
  databaseUrl:
    process.env.MONGODB_URI ||
    "mongodb+srv://konradjop91:rErpOlqwVVAUo0iS@app.cf9smvl.mongodb.net/test",
  JwtSecret: process.env.JWT_SECRET || "secret",
};

export default config;
