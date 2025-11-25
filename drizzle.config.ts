import type { Config } from "drizzle-kit";
import envConfig from "./src/config";

const config: Config = {
  schema: "./src/database/schema/*",
  out: "./src/database/migrations",
  dialect: "postgresql",
  strict: true,
  dbCredentials: {
    url: envConfig.require("DB_URL"),
    ssl: envConfig.require("DB_SSL") === "true",
  },
};

export default config;
