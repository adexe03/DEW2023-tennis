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