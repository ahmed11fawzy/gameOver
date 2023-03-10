const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '32f42afe51msha8504fa4fcb37a5p132197jsnea3e7d67f415',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

async function getData(){
	const data=await fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc', options)
	const result=await data.json();
	const games=Array.from(result)
	for(let i=0 ;i<games.length;i++){
		console.log(games[i].id);
	}

	/* console.log(games.length)
	console.log(result[3].id) */
}
 getData();
	/* .then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); */