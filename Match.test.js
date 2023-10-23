const Match = require('./Match');
const Player = require('./Player');

test('Crear un partido', () => {
    const match1 = new Match();
    expect(match1).toEqual({players: [], winner: null});
    expect(match1 instanceof Match).toBeTruthy();
});

test('Insertar un jugador en un partido sin jugadores', () =>{
    const match1 = new Match();
    const player1 = new Player('Pepe');
    expect(match1.addPlayer(player1)).toBeTruthy();
    // expect(match1.players[0]).toBe(player1);
    expect(match1.players.length).toBe(1);
    expect(match1.players).toContain(player1);

});
test('Insertar un jugador en un partido con un jugador', () =>{
    const match1 = new Match();
    const player1 = new Player('Pepe');
    expect(match1.addPlayer(player1)).toBeTruthy();
    const player2 = new Player('Juan');
    expect(match1.addPlayer(player2)).toBeTruthy();
    // expect(match1.players[0]).toBe(player1);
    // expect(match1.players[1]).toBe(player2);
    expect(match1.players.length).toBe(2);
    expect(match1.players).toContain(player1);
    expect(match1.players).toContain(player2);
});

test('Insertar 3 jugadores, solo deben estar los 2 primeros, el último no se inserta', () => {
    const match1 = new Match();
    const player1 = new Player('Pepe');
    expect(match1.addPlayer(player1)).toBeTruthy();
    const player2 = new Player('Juan');
    expect(match1.addPlayer(player2)).toBeTruthy();
    const player3 = new Player('Ana');
    expect(match1.addPlayer(player3)).toBeFalsy();
    expect(match1.players.length).toBe(2);
    expect(match1.players).toContain(player1);
    expect(match1.players).toContain(player2);
    expect(match1.players).not.toContain(player3);

});