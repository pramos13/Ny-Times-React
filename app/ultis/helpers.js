var axios = require('axios');

/* NYT API Key*/
var APIKey = "8d5ed33e08304c0eb6fb88eb7cfc44ba";

// Helper Functions 
var helpers = {

	// This will run our query.
	runQuery: function(term, start, end, callback){

		// Adjust to get search terms in proper format
		var term = term.trim();
		var start = start.trim() + "0101";
		var end = end.trim() + "1231";


		console.log("Query Run");
		// Run a query using Axios. Then return the results as an object with an array.
		// See the Axios documentation 
		return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
			params: {
			    'api-key': APIKey,
			    'q': term,
			    'begin_date': start,
			    'end_date': end			
			}
		})
		.then(function(results){
			console.log("Axios Results", results.data.response);
			callback(results.data.response)

			// return results.data.response;

		});



	},

	getSaved: function(callback){

		return axios.get('/api/saved')
			.then(function(results){
				console.log("axios results", results);
				callback(results);
			})
	},

	postSaved: function(data){

		var newArticle = {url: data.web_url, text: data.snippet, title: data.headline.main, date: data.pub_date};
		return axios.post('/api/saved', newArticle)
			.then(function(results){
				console.log("axios results", results._id);
				return results._id;
			})

	},

	deleteSaved: function(id){

		return axios.delete('/api/saved', {
			params: {
			    'id': id
			}
		})
		.then(function(results){
			console.log("axios results", results);
			return results;
		})
	}

}

module.exports = helpers;

