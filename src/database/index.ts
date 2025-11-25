import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import config from "@/config";

const pool = new Pool({ connectionString: config.require("DB_URL") });

async function checkDatabaseConnection() {
  try {
    const response = await pool.query("SELECT NOW()");
    console.log("✅ Database connection success! Time:", response.rows[0].now);
  } catch (err) {
    console.error("❌ Database connection error:", err);
  }
}

checkDatabaseConnection();

export default drizzle(pool);
