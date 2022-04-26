const clientID = 'e3caae90f5msh622cf674c4fdd0cp17c1e3jsna6fe8958ca1f'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		'X-RapidAPI-Key': clientID,
	}
};

const Tasty = {

    search(tag, term) {
        return fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=50&tag=${tag}&q=${term}`, options)
	    .then(response => response.json())
	    .then(jsonResponse => {
            return jsonResponse.results.map(result => ({
                name: result.name,
                instructions: result.instructions,
                yields: result.yields,
                originalVideo: result.original_video_url,
                prepTime: result.prep_time_minutes,
                totalTime: result.total_time_tier,
                thumbnail: result.thumbnail_url,
                supplies: result.sections,
            }))
        })
	    .catch(err => console.error(err));
    }
}

export default Tasty