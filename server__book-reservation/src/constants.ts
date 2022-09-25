const __prod__ = process.env.NODE_ENV === "production";
const COOKIE_NAME = "qid";
const FORGET_PASSWORD_PREFIX = "forget-password:";
const SESSION_SECRET = process.env.SESSION_SECRET as string;
const PORT = process.env.PORT || 5001;

const DB_HOST =
  process.env.DB_HOST || "ec2-52-200-5-135.compute-1.amazonaws.com";
const DB_PORT = process.env.DB_PORT as any;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const REDIS_ONLINE = process.env.REDIS_ONLINE as any;
const REDIS_LOCAL = process.env.REDIS_LOCAL as any;
const REDIS_URL =
  process.env.NODE_ENV === "production" ? REDIS_ONLINE : REDIS_LOCAL;

const ORIGIN = process.env.ORIGIN;

export {
  __prod__,
  PORT,
  FORGET_PASSWORD_PREFIX,
  COOKIE_NAME,
  SESSION_SECRET,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  REDIS_ONLINE,
  REDIS_LOCAL,
  REDIS_URL,
  ORIGIN,
};
