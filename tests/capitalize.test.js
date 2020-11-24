const capitalize = require('../modules/capitalize');

test("take 'bogger' and return 'Bogger'", () => {
    expect(capitalize('bogger')).toBe('Bogger');
});