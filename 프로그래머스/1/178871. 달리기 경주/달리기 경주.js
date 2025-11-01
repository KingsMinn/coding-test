function solution(players, callings) {
    const playerList = {};
    players.forEach((player, ind) => playerList[player] = ind);
    
    callings.forEach(calling => {
        let rank = playerList[calling]; // Number
        playerList[players[rank-1]]++;
        [players[rank-1], players[rank]] = [players[rank], players[rank-1]];
        playerList[calling]--;
    });
    
    return players;
}