var React = require('react');

var Search = require ('./search');
	


var Main = React.createClass({
	render: function(){

		return(
		



			<div className="main-container">


				<div className="container">
					{/*Navbar*/}
					<nav className="navbar navbar-default" role="navigation">
						<div className="container-fluid">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a className="navbar-brand" href="#">NYT-React</a>
							</div>

							<div className="collapse navbar-collapse navbar-ex1-collapse">
								<ul className="nav navbar-nav navbar-right">
									<li><a href="#/search">Search</a></li>
									<li><a href="#/saved">Saved Articles</a></li>
								</ul>
							</div>
						</div>
					</nav>

					{/*Jumbotron*/}
					<div className="jumbotron">
						<h2 className="text-center"><strong>(ReactJS) New York Times Article Scrubber</strong></h2>
						<h3 className="text-center">Search for and save articles of interest.</h3>
					</div>


					/*loading the sub components*/
					
					{this.props.children}

					
				</div>



			</div>

















		)
	}
})


module.exports = Main;

			