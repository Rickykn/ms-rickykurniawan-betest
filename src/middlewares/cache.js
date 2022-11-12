const Redis = require("ioredis");
const fs = require("fs");

const redis = new Redis({
  host: process.env.HOST,
  port: process.env.PORT_REDIS,
  password: process.env.PASSWORD,
});

async function cache(req, res, next) {
  redis.get(process.env.REDIS_KEY, (err, data) => {
    if (err) throw err;
    if (data != null) {
      return res.status(200).json({
        Data: JSON.parse(data),
      });
    } else {
      next();
    }
  });
}

module.exports = {
  cache,
};
