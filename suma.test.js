const {suma, resta, producto} = require('./suma');

test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('sumar 5 + 4 es igual a 9', () => {
    expect(suma(5, 4)).toBe(9);
});

test('restar 44 - 11 es igual a 33', () => {
    expect(resta(44, 11)).toBe(33);
});

test('producto 44 - 11 es igual a 33', () => {
    expect(producto(4, 3)).toBe(12);
});