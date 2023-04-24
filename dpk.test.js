const {deterministicPartitionKey} = require('./dpk');
const {createHash} = require("crypto");

describe('deterministicPartitionKey', () => {
    test('returns the partition with hash algorithm', () => {
        const event = {partitionKey: 'my-key'};
        expect(deterministicPartitionKey(event.partitionKey))
            .toBe(createHash("sha3-512").update(JSON.stringify(event.partitionKey)).digest("hex"));
    });

    test('returns the partition with hashed string', () => {
        const event = {partitionKey: 'my-key'};
        expect(deterministicPartitionKey(event.partitionKey))
            .toBe('2e1e38cea879761105308ba217f02689edd243329d7a9653264e5d8e85a26e5964541b4bd6349dd0f4ac69ad51ea87283568e66f20152e2c54c97f6d447016e8');
    });

    test('returns "0" for undefined input', () => {
        expect(deterministicPartitionKey(undefined)).toBe('0');
    });
});