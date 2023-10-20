const Match = require('./Match');

test('Crear un partido', () => {
    const match1 = new Match();
    expect(match1).toEqual({});
    expect(match1 instanceof Match).toBe();
    
});