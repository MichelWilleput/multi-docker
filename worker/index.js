const keys = require('./keys');
const redis = require('redis');

// Initialize old-school client matching version 2.8.0
const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

function fib(index) {
    if (index < 2) return 1;
    return fib(index - 1) + fib(index - 2);
}

// Listen to incoming channel entries
sub.on('message', (channel, message) => {
    const cleanMessage = String(message).trim();
    // Overwrite the placeholder value in the hash table
    redisClient.hset('values', cleanMessage, fib(parseInt(cleanMessage)));
});

sub.subscribe('insert');
