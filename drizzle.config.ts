import "dotenv/config";
import { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts", //where my schema's will be
  out: "./drizzle", //where migrations will be at
  driver: "pg", //i use postgre
  dbCredentials: {
    connectionString: process.env.DATABASE_URL! as string,
  },
  verbose: true,
  strict: false,
} satisfies Config;

