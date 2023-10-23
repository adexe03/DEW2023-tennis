const Player = require('./Player');

test('Crear jugador', () =>{
    const player1 = new Player('Pepe');
    expect(player1.name).toBe('Pepe');
    expect(player1).toEqual({name: 'Pepe', ranking: 0});
});

test('Crear jugador con raking', () => {
    const player1 = new Player('Pepe', 7);
    expect(player1.ranking).toBe(7);
    player1.ranking = 9;
    expect(player1.ranking).toBe(9);
    expect(player1).toEqual({name: 'Pepe', ranking: 9});
});

test('Crear jugador male', () =>{
    const player1 = new Player('Pepe', 5, 'male');
    expect(player1.name).toBe('Pepe');
    expect(player1.gender).toBe('male');
});

test('Crear jugador female', () =>{
    const player1 = new Player('Ana', 3, 'female');
    expect(player1.name).toBe('Ana');
    expect(player1.gender).toBe('female');
});

test('Crear jugador female sin indicar el género', () =>{
    const player1 = new Player('Ana');
    expect(player1.name).toBe('Ana');
    expect(player1.gender).toBe('female');
});

test('Crear jugador female por poner un género extraño', () =>{
    const player1 = new Player('Ana', 2, 'pato');
    expect(player1.name).toBe('Ana');
    expect(player1.gender).toBe('female');
});