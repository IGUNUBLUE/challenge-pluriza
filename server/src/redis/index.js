const redis = require('redis');
const redisPort = process.env.REDIS_PORT || 6379;
const redisHost = process.env.REDIS_URL || redisPort;
const client = redis.createClient(redisHost);

client.on('error', (err) => {
   console.log(err);
});

module.exports = client;
