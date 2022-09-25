import {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_PASSWORD,
  DB_USERNAME,
  __prod__,
} from "../../constants";
import { DataSource } from "typeorm";

const datasource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: ["dist/entities/*.js"],
  synchronize: false,
  logging: false,
  ssl: __prod__!,
});

export default datasource;
