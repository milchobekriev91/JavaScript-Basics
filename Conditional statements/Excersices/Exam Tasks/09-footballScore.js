function footballTeam(input) {
    let firstMatch = input[0];
    let secondMatch = input[1];
    let thirdMatch = input [2];
  
    let winGames = 0;
    let lostGames = 0;
    let drawnGames = 0;
  
    let firstTeamScore = firstMatch.substring(0, 1);
    let secondTeamScore = firstMatch.substring(2, 3);
  
        if (firstTeamScore > secondTeamScore) {
  	    winGames ++;
        } else if (firstTeamScore == secondTeamScore){
  	    drawnGames ++;
        } else if (firstTeamScore < secondTeamScore){
  	    lostGames ++;
        }
  
    firstTeamScore = secondMatch.substring(0, 1);
    secondTeamScore = secondMatch.substring(2, 3);
  
        if (firstTeamScore > secondTeamScore) {
  	        winGames ++;
        } else if (firstTeamScore == secondTeamScore){
  	        drawnGames ++;
        } else if (firstTeamScore < secondTeamScore){
  	        lostGames ++;
        }
  	
    firstTeamScore = thirdMatch.substring(0, 1);
    secondTeamScore = thirdMatch.substring(2, 3);
    
        if (firstTeamScore > secondTeamScore) {
  	        winGames ++;
        } else if (firstTeamScore == secondTeamScore){
  	        drawnGames ++;
        } else if (firstTeamScore < secondTeamScore){
  	        lostGames ++;
        }  
  
    console.log(`Team won ${winGames} games.`);
    console.log(`Team lost ${lostGames} games.`);
    console.log(`Drawn games: ${drawnGames}`);
}