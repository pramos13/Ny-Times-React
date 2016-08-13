 var React = require('react');
 var Router = require('react-router');
 

var Query = require('./Query');
var Results = require('./Results');

// Include the Helper (for the query)
var helpers = require('../utils/helpers');

// Create the Main component
var Search = React.createClass({

	// /Here we set the initial state variables
	getInitialState: function(){
		return {
			queryTerm: "",
			startYear: "",
			endYear: "",
			results: {}
		}
	},


	/*This function gets called if the user searches for a completely new set of parameters (i.e. if any of the search terms changes)*/
	/*If the user searches for the exact same thing, then React will ignore it.*/
	componentDidUpdate: function(prevProps, prevState){
		console.log("COMPONENT UPDATED");
		console.log(this.state.queryTerm);
		console.log(this.state.startYear);
		console.log(this.state.endYear);

		console.log("Previous State", prevState);
		helpers.runQuery(this.state.queryTerm, this.state.startYear, this.state.endYear, function(data){
			console.log('got back to search');
			this.setState({
				results: data
			})
		}.bind(this));



				// console.log("RESULTS", results)
				// console.log("DATA", data)

				
	// This function will be passed down into children components so they can change the "parent"
	setQuery: function(newQuery, newStart, newEnd){
		console.log("TEST");
		this.setState({
			queryTerm: newQuery,
			startYear: newStart,
			endYear: newEnd
		})


	},

	/*Render the function.*/
	render: function(){
		console.log("Render Results", this.state.results)

		return(

			<div className="main-container">

				
				<Query updateSearch={this.setQuery} />

				{/*Note how we pass in the results into this component*/}
				<Results results={this.state.results}/>

			</div>

		)
	}
});

 	

 module.exports = Search