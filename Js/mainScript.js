let games
	,gamesTitle=[];
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '32f42afe51msha8504fa4fcb37a5p132197jsnea3e7d67f415',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};


async function getData(){

const data=await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options);
	const result=await data.json();
	games=Array.from(result)
		console.log(games)
	for(let i=0 ;i<games.length;i++){
		gamesTitle.push(games[i].title);
		
	}	
}

getData();


$('#searchIcon').click(function(){
	$('#searchInp').toggle('slow')
	$('#searchInp').keydown(function(e){
		if(e.key=='Enter'){
			let searchedGame = games.find(o => {
				if(o.title === $('#searchInp').val()){
					return o.title === $('#searchInp').val();
					
				}
				
			});
			if(searchedGame===undefined){
				console.log('Game not found');
			}
			else{
				console.log(searchedGame);
			}
	

			$('#searchInp').val('');
		}
		
		
	})
})

$('.navbar-toggler').click(function(){
	$('.bar_1').toggleClass('closeBar1')
	$('.bar_2').toggleClass('closeBar2')
	$('.bar_3').toggleClass('closeBar3')
})
