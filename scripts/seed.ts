import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!); 
const db = drizzle(sql, {schema});

const main = async () => {
  try {
    console.log("Sembrando la base de datos");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Sumas",
        imageSrc: "/suma.png",
      },
      {
        id: 2,
        title: "Restas",
        imageSrc: "/resta.png",
      },
      {
        id: 3,
        title: "Multiplicación",
        imageSrc: "/multiplicacion.png",
      },
      {
        id: 4,
        title: "División",
        imageSrc: "/division.png",
      },
    ]);

    console.log("Terminado");
  } catch (error) {
    console.error(error);
    throw new Error("Error al generar la base de datos");
  }
}

main()