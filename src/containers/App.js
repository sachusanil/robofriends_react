import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components//SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component
{
  
	constructor()
	{
		super()
		this.state = 
		{
			robots : [],
			searchfield:''
		}
	}
	
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value }) 
  }

  	componentDidMount(){
  		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response => response.json() )
  		.then(users => this.setState({robots: users})); 
  	}

	render() 
	{	const robotfilter = this.state.robots.filter(robot => {
			return (robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
		})
		if  (this.state.robots.length===0){
			return (
				<div className="tc f1">
					<h1>Loading</h1>
				</div>);
		} else {
			return(
			<div className='tc'>
				<h1 className='f1'> RoboFriends </h1>
				<SearchBox pp={this.onSearchChange}/>
				<Scroll>
					<CardList robots={robotfilter}/>
				</Scroll>	
			</div>
		); 

		}
		
	}
}

	

export default App;
