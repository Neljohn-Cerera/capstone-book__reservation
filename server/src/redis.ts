import Redis from "ioredis";
import { REDIS_URL } from "./constants";

export const redis = new Redis(REDIS_URL);

redis.on("error", function (err) {
  console.error("redis error: " + err);
});
