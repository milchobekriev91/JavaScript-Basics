function seriesCalculator(input){
	let movie = input[0];
  let seasonsCnt = Number(input[1]);
  let episodesCnt = Number(input[2]);
  let episodeLnt = Number(input[3]);
  
  let fullEpisode = episodeLnt + 0.2 * episodeLnt;
  let extraEpisodeTime = seasonsCnt * 10;
  
  let fullTime = seasonsCnt * episodesCnt * fullEpisode + extraEpisodeTime;
  
  console.log(`Total time needed to watch the ${movie} series is ${fullTime} minutes.`);
  
}

seriesCalculator(['Lucifer', '3', '18', '55']);