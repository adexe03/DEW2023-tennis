class Match {
    players = [];
    winner = null;

    addPlayer(player) {
        if (this.players.length >= 2) return false
        
        this.players.push(player);
        return true;
    }
}
module.exports = Match;