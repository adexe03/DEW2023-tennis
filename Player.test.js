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

test('Crear jugador con fecha nacimiento válida', () => {
    const player1 = new Player('Ana', 2, 'female', '13/04/1999');
    expect(player1.birthday).toBe('13/04/1999');
});

test('Crear jugador con fecha nacimiento no válida', () => {
    const player1 = new Player('Ana', 2, 'female', 'kkfu');
    expect(player1.birthday).not.toBe(new Date('kkfu'));
    expect(player1.birthday).toBeUndefined();
    expect(player1.age).toBeUndefined();
});

test('Crear jugador con fecha nacimiento válida pero no se ha cumplido este año', () => {
    const player1 = new Player('Ana', 2, 'female', '28/10/2000');
    expect(player1.age).toBe(22);
});

test('Jugador benjamín', () => {
    const player = new Player('pepe', 1, 'male', '12/12/2016');
    expect(player.category).toBe('Benjamin');
});

test('Jugador cadet', () => {
    const player = new Player('pepe', 1, 'male', '1/1/2010');
    expect(player.category).toBe('Cadet');
});

test('Jugador junior', () => {
    const player = new Player('pepe', 1, 'male', '1/1/2004');
    expect(player.category).toBe('Junior');
});

test('Jugador senior', () => {
    const player = new Player('pepe', 1, 'male', '1/1/2000');
    expect(player.category).toBe('Senior');
});