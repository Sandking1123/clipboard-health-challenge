const {createHash} = require("crypto");
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

function deterministicPartitionKey (event)  {
    if (!event) return TRIVIAL_PARTITION_KEY;
    const candidate = event?.partitionKey || hash(event);
    return candidate.length > MAX_PARTITION_KEY_LENGTH ? hash(candidate) : candidate;
}

function hash(value) {
    return createHash("sha3-512").update(JSON.stringify(value)).digest("hex");
}

module.exports = { deterministicPartitionKey };